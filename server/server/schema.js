const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    userID: String,
    exercises: [{
        title: String,
        musclesWorked: [String],
        primaryMusclesWorked: [String],
        ROM: String,
        equipment: [String],
        custom: String
    }]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

const workoutSchema = new mongoose.Schema({
    userID: String,
    workouts: [{
        title: String,
        exercisesAndRests: [String],
        equipment: [String],
        custom: String
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = {
    Exercise,
    Workout
};
