const defaultUser = "default";

const { v4: uuidv4 } = require('uuid');

const {Workout, Exercise} = require('../schema');

const {workouts, exercises} = require('./exercises');

async function init() {
    let workout_titles = [];
    workouts.forEach(x => {
        workout_titles.push(x.title);
    });
    let exercise_titles = [];
    exercises.forEach(x => {
        exercise_titles.push(x.title);
    });
    await Workout.updateOne({userID: defaultUser}, {
        $pull: {
            workouts: {
                title: workout_titles
            }
        }
    }).exec();
    await Workout.updateOne({userID: defaultUser}, {
        $push: {
            workouts: workouts,
        }
    }, {
        upsert: true,
        new: true
    }).exec();
    await Exercise.updateOne({userID: defaultUser}, {
        $pull: {
            exercises: {
                title: exercise_titles
            }
        }
    }).exec();
    await Exercise.updateOne({userID: defaultUser}, {
        $push: {
            exercises: exercises,
        }
    }, {
        upsert: true,
        new: true
    }).exec();
}

module.exports = {
    defaultUser,
    init
};