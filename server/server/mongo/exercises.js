const {Exercise} = require('../schema');
const {defaultUser} = require('../init/default');

async function retrieveExercise(userID= defaultUser) {
    let exercise = await Exercise.findOne({userID}).exec();
    if (exercise) {
        return exercise.exercises;
    } else {
        return [];
    }
}

async function upsertExercise(userID = defaultUser, musclesWorked = [], primaryMusclesWorked = [], ROM = '', equipment = [], custom = '', title = '') {
    // upsert
    await Exercise.updateOne({userID}, {
        $pull: {
            exercises: {
                title
            }
        }
    }).exec();
    await Exercise.updateOne({userID}, {
        $push: {
            exercises: {
                musclesWorked,
                primaryMusclesWorked,
                ROM,
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

async function deleteExercise(userID = defaultUser, title = '') {
    await Exercise.updateOne({userID}, {
        $pull: {
            exercises: {
                title
            }
        }
    }).exec();
    return title;
}


async function lookupExerciseByTitle(userID = defaultUser, exerciseTitle = '') {
    let exercise = await Exercise.aggregate([
        { $match: {userID}},
        { $unwind: '$exercises'},
        // { $match: {'exercises.title': {$regex: '.*' + exerciseTitle + '.*'}}}  // uncomment this line and comment the next line for wildcard match
        { $match: {'exercises.title': exerciseTitle }}
    ]).exec();
    if (exercise.length > 0) {
        return exercise[0].exercises;
    } else {
        return [];
    }
}

async function validateExerciseByTitle(userID = defaultUser, exerciseTitle = '') {
    let result = await lookupExerciseByTitle(userID, exerciseTitle);
    return result.length === 0;
}

module.exports = {
    retrieveExercise,
    upsertExercise,
    deleteExercise,
    lookupExerciseByTitle,
    validateExerciseByTitle
};