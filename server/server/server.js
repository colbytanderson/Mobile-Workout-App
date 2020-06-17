 // HOW THE DATA IS TRANSFERRED:
// the database starts with one exercise and workout instance, with our userID string
// this will serve as the defaults.
// when a user goes onto our app, we retrieve data without userID (only defaults)
// if they create an account, we copy all of the defaults into a new instance of exercise and workout
// now, whenever that user logs in, we retrieve the data with his userID
// if that user ever creates custom exercises/workouts, they will be added to the instance with his userID
// RESTORING:
// restoring accounts to default means deleting all custom data (but not the user's instance), however,
// remember that a user (once account is created) can edit the default data, therefore restoring means
// replacing all the user's data with our data from our ID instance
// DELETING:
// the whole user's instance is deleted
 const express = require('express');
 const cookieParser = require('cookie-parser');

 const mongoose = require('mongoose');
 // import {Workout, Exercise} from "./schema";

 const app = express();
 const port = 8080;

 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(cookieParser());


 mongoose.set('useFindAndModify', false);

 (async () => {
     try {
         await mongoose.connect('mongodb://hk3.jq.mk/Physique', {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             user: 'test1231424',
             pass: '34vb214v23hg4v',
         });
     } catch (error) {
         console.error(error);
     }
 })();

 function close() {
     mongoose.disconnect();
 }

 const {init} = require('./init/default');
 const {handleRestore, handleRegister, handleDelete, handleValidate} = require('./restful/account');
 const {handleUpsertWorkout, handleRetrieveWorkout, handleDeleteWorkout, handleLookupByTitleWorkout, handleValidateWorkout} = require('./restful/workout');
 const {handleDeleteExercise, handleRetrieveExercise, handleUpsertExercise, handleLookupByTitleExercise, handleValidateExercise} = require('./restful/exercise');

 init();
 app.get('/:userID/retrieveWorkout', handleRetrieveWorkout);
 app.post('/:userID/upsertWorkout', handleUpsertWorkout);
 app.post('/:userID/deleteWorkout', handleDeleteWorkout);

 app.get('/:userID/retrieveExercise', handleRetrieveExercise);
 app.post('/:userID/upsertExercise', handleUpsertExercise);
 app.post('/:userID/deleteExercise', handleDeleteExercise);

 // changed the endpoint below. added :/userID
 app.post('/registerUser/:userID', handleRegister);
 app.post('/:userID/restoreUser', handleRestore);
 app.post('/:userID/deleteUser', handleDelete);


 // extra

 // returns an exercise object that matches the inputted title
 app.get('/exerciseByTitle/:userID/:exerciseTitle', handleLookupByTitleExercise);
 // same as before but for workout
 app.get('/workoutByTitle/:userID/:workoutTitle', handleLookupByTitleWorkout);

 // returns string true if the username has not already been taken, string false otherwise
 app.get('/validateUser/:userID', handleValidate);
 // same as before but with an exercise title
 app.get('/validateExercise/:userID/:exercise', handleValidateExercise);
 // same as before but with a workout title
 app.get('/validateWorkout/:userID/:workout', handleValidateWorkout);

 //testing
 app.get('/test', (req, res) => res.send("test"));

 app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));