const {Workout} = require('../schema');
const {defaultUser} = require('../init/default');

async function retrieveWorkout(userID= defaultUser) {
    let workout = await Workout.findOne({userID}).exec();
    if (workout) {
        return workout.workouts;
    } else {
        return [];
    }
}

async function upsertWorkout(userID = defaultUser, exercisesAndRests = [], equipment = [], custom = '', title= '') {
    await Workout.updateOne({userID}, {
        $pull: {
            workouts: {
                title
            }
        }
    }).exec();
    await Workout.updateOne({userID}, {
        $push: {
            workouts: {
                exercisesAndRests,
                equipment,
                custom,
                title
            }
        }
    }, {
        upsert: true,
        new: true
    }).exec();

    return title;
}

async function deleteWorkout(userID = defaultUser, title = '') {
    await Workout.updateOne({userID}, {
        $pull: {
            workouts: {title}
        }
    }).exec();
    return title;
}

async function lookupWorkoutByTitle(userID = defaultUser, workoutTitle = '') {
    let workout = await Workout.aggregate([
        { $match: {userID}},
        { $unwind: '$workouts'},
        // { $match: {'workouts.title': {$regex: '.*' + workoutTitle + '.*'}}}
        { $match: {'workouts.title': workoutTitle }}
    ]).exec();
    if (workout.length > 0) {
        return workout[0].workouts;
    } else {
        return [];
    }
}

async function validateWorkoutByTitle(userID = defaultUser, workoutTitle = '') {
    let result = await lookupWorkoutByTitle(userID, workoutTitle);
    return result.length === 0;
}

module.exports = {
    retrieveWorkout,
    upsertWorkout,
    deleteWorkout,
    lookupWorkoutByTitle,
    validateWorkoutByTitle
};