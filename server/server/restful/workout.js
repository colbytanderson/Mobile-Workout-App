const { retrieveWorkout, deleteWorkout, upsertWorkout, lookupWorkoutByTitle, validateWorkoutByTitle } = require('../mongo/workouts');

async function handleRetrieveWorkout(req, res) {  // get
    let userID = req.params.userID;
    let result = await retrieveWorkout(userID);
    return res.send(result);
}

async function handleUpsertWorkout(req, res) {  // post
    let userID = req.params.userID;
    let exercisesAndRests = req.body.exercisesAndRests;
    let equipment = req.body.equipment;
    let custom = req.body.custom;
    let title = req.body.title;
    return res.send(await upsertWorkout(userID, exercisesAndRests, equipment, custom, title));
}

async function handleDeleteWorkout(req, res) {  // post
    let userID = req.params.userID;
    let title = req.body.title;
    return res.send(await deleteWorkout(userID, title));
}

async function handleLookupByTitleWorkout(req, res) {  // get
    let userID = req.params.userID;
    let workoutTitle = req.params.workoutTitle;
    return res.send(await lookupWorkoutByTitle(userID, workoutTitle));
}

async function handleValidateWorkout(req, res) {
    let userID = req.params.userID;
    let workoutTitle = req.params.workout;
    let result = await validateWorkoutByTitle(userID, workoutTitle);
    return res.send(result);
}

module.exports = {
    handleDeleteWorkout,
    handleRetrieveWorkout,
    handleUpsertWorkout,
    handleLookupByTitleWorkout,
    handleValidateWorkout
};