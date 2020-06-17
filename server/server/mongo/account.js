// register, restore, delete
const { v4: uuidv4 } = require('uuid');

const {Workout, Exercise} = require('../schema');
const {defaultUser}  = require('../init/default');

async function register(userID = '') {
    let new_user = '';
    if (userID !== '') {
        new_user = userID;
    } else {
        new_user = uuidv4();
    }
    let default_exercises = await Exercise.findOne({userID: defaultUser}).exec();
    let exercises;
    if (default_exercises == null) {
        exercises = [];
    } else {
        exercises = default_exercises.exercises;
    }
    await Exercise.create({
        userID: new_user,
        exercises
    });
    let default_workouts = await Workout.findOne({userID: defaultUser}).exec();
    let workouts;
    if (default_workouts == null) {
        workouts = [];
    } else {
        workouts = default_workouts.workouts;
    }
    await Workout.create({
            userID: new_user,
            workouts
        });
    return new_user;
}

async function restore(userID) {
    let default_exercises = await Exercise.findOne({userID: defaultUser}).exec();
    let exercises;
    if (default_exercises == null) {
        exercises = [];
    } else {
        exercises = default_exercises.exercises;
    }
    await Exercise.findOneAndUpdate({
            userID: userID
        }, {
            exercises
        },
        {
            upsert: true,
            new: true
        }).exec();
    let default_workouts = await Workout.findOne({userID: defaultUser}).exec();
    let workouts;
    if (default_workouts == null) {
        workouts = [];
    } else {
        workouts = default_workouts.workouts;
    }
    await Workout.findOneAndUpdate({
        userID: userID
    }, {
        workouts
    }, {
        upsert: true,
        new: true
    }).exec();
    return userID;
}

async function delete_user(userID) {
    await Exercise.findOneAndDelete({
        userID: userID
    }).exec();
    await Workout.findOneAndDelete({
        userID: userID,
    }).exec();
    return userID;
}

async function validate_user(userID) {
    let default_exercises = await Exercise.findOne({userID: userID}).exec();
    return default_exercises === null;

}

module.exports = {
    register,
    restore,
    delete_user,
    validate_user
};