# Usage

Run server.js with 
```$xslt
node server.js
```

The server listens 8080.
The username/password of mongodb is test/test, and database name is "Physique".

To run mongodb locally, install docker first

Run:
```bash
docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

docker exec -it {YOUR_DOCKER_ID} mongo

db.createUser(
    {
        user: "test",
        pwd: "test",
        roles:[
            {
                role: "readWrite",
                db:   "Physique"
            }
        ]
    }
);

```


I personally suggest using Mac APP "ROBO 3T" to view/edit the database.
Also, for REST API testing, I suggest Postman under Windows and Paw under Mac. 

# REST API

## retrieveWorkout
GET `'/:userID/retrieveWorkout'`

Return `[workouts]`

## upsertWorkout
POST `'/:userID/upsertWorkout'`

Body:
```json
{
  "exercisesAndRests": [String],
  "equipment": [String],
  "custom": String,
  "title": String
}
```

Return `workoutID`

## deleteWorkout
POST `'/:userID/deleteWorkout'`

Body:
```json
{
  "title": String
}
```

Return `workoutID`

## lookupByTitleWorkout
GET `'/workoutByTitle/:userID/:workoutTitle'`

Return single workout element

## validateWorkout

GET `'/validateWorkout/:userID/:workout'`

workout here is workoutTitle

Return `'true'` or `'false'`

## retrieveExercise
GET `'/:userID/retrieveExercise'`

Return `[exercises]`

## upsertExercise
POST `'/:userID/upsertExercise'`

Body:
```json
{
  "musclesWorked": [String],
  "ROM": String,
  "equipment": [String],
  "custom": String,
  "title": String
}
```

Return `exerciseID`

## deleteExercise
POST `'/:userID/deleteExercise'`

Body:
```json
{
  "title": String
}
```
Return `exerciseID`

## lookupByTitleExercise

Get `'/exerciseByTitle/:userID/:exerciseTitle'`

Return single exercise element

## validateExercise

GET `'/validateExercise/:userID/:exercise'`

exercise here is exerciseTitle

Return `'true'` or `'false'`


## registerUser
POST `'/registerUser'`

Return `userID`


## restoreUser
POST `'/:userID/restoreUser'`

Body:
```json
{
}
```

Return `userID`

## deleteUser
POST `'/:userID/deleteUser'`

Body:
```json
{
}
```

Return `userID`

## validateUser

GET `'/validateUser/:userID'`

Return `'true'` or `'false'`
