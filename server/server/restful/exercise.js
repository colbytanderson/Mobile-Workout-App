const { retrieveExercise, deleteExercise, upsertExercise, lookupExerciseByTitle, validateExerciseByTitle } = require('../mongo/exercises');

async function handleRetrieveExercise(req, res) {  // get
    let userID = req.params.userID;
    let result = await retrieveExercise(userID);
    return res.send(result);
}

async function handleUpsertExercise(req, res) {  // post
    let userID = req.params.userID;
    let musclesWorked = req.body.musclesWorked;
    let primaryMusclesWorked = req.body.primaryMusclesWorked;
    let ROM = req.body.ROM;
    let equipment = req.body.equipment;
    let custom = req.body.custom;
    let title = req.body.title;
    return res.send(await upsertExercise(userID, musclesWorked, primaryMusclesWorked, ROM, equipment, custom, title));
}

async function handleDeleteExercise(req, res) {  // post
    let userID = req.params.userID;
    let title = req.body.title;
    return res.send(await deleteExercise(userID, title));
}

async function handleLookupByTitleExercise(req, res) {  // get
    let userID = req.params.userID;
    let exerciseTitle = req.params.exerciseTitle;
    return res.send(await lookupExerciseByTitle(userID, exerciseTitle));
}

async function handleValidateExercise(req, res) {
    let userID = req.params.userID;
    let exerciseTitle = req.params.exercise;
    let result = await validateExerciseByTitle(userID, exerciseTitle);
    return res.send(result);
}

module.exports = {
    handleDeleteExercise,
    handleRetrieveExercise,
    handleUpsertExercise,
    handleLookupByTitleExercise,
    handleValidateExercise
};