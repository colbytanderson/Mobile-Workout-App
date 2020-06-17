import Vue from 'vue';
import Vuex from 'vuex';

// import for testing
// import { exercises, workouts } from './data/exercises';
const appSettings = require("tns-core-modules/application-settings");
Vue.use(Vuex);

const port = 443;
const server = `https://hk3.jq.mk:${port}`;

const store = new Vuex.Store({
    state: {
        // for real us
        // exerciseObjects: [],
        // workoutObjects: [],
        // for testing
        server: "https://hk3.jq.mk:443",
        exerciseObjects: [],
        workoutObjects: [],
        username: 'default',
        password: '',
        isRegistered: false,
        currentExercise: null,
        currentWorkout: null,
        isEditingWorkout: false
    },
    mutations: {
        upsertExercise(state, item) {
            // add exercise to exercise list
            // send new exercise to server to store in database
            fetch(`${server}/${state.username}/upsertExercise`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                        state.exerciseObjects.push(item);
                    })
                })
                .catch(e => console.error(e));
        },
        upsertWorkout(state, item) {
            fetch(`${server}/${state.username}/upsertWorkout`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                        state.workoutObjects.push(item);
                    })
                })
                .catch(e => console.error(e));
        },

        setData(state) {
            // set state username
            // set state password
            // get workouts
            const someKey = appSettings.getString("username", "default");
            state.username = someKey;
            if (someKey !== "default") {
                state.isRegistered = true;
            }
            state.password = appSettings.getString("password", "default");
            fetch(`${server}/${state.username}/retrieveWorkout`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        state.workoutObjects = parsedJson;
                    })
                })
                .catch(e => console.error(e));

            // get exercises
            fetch(`${server}/${state.username}/retrieveExercise`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        state.exerciseObjects = parsedJson;
                    })
                })
                .catch(e => console.error(e));
        },
        setCurrentObjItem(state, item) {
            // console.log(item);
            // for real use
            // console.log("in commit");
            state.currentExercise = item;


            // fetch(`${server}/exerciseByTitle/${state.username}/${item}`, {method: "GET", body: null})
            // .then(function(response) {
            //   response.json().then(function(parsedJson) {
            //     console.log("res", parsedJson[0].exercises);
            //     state.currentExercise = parsedJson[0].exercises;
            //     console.log("in fetch", state.currentExercise);
            //   })})
            //   .catch(e => console.error(e));


            // console.log("out fetch", state.currentExercise);
            // console.log("Asdddddfsdf sdfsdfs dfsdfdfasdf", state.currentExercise.title);
            // for testing use
            // state.currentExercise = exercises[0];
        },
        setUsername(state, username) {
            fetch(`${server}/registerUser/${username}`, {method: "POST", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                        state.username = username;
                    })
                })
                .catch(e => console.error(e));
        },
        setCurrentWorkoutItem(state, item) {
            // for real use

            state.currentWorkout = item;


            // fetch(`${server}/workoutByTitle/${state.username}/${item}`, {method: "GET", body: null})
            // .then(function(response) {
            //   response.json().then(function(parsedJson) {
            //     console.log(parsedJson);
            //     state.currentWorkout = parsedJson;
            //   })})
            //   .catch(e => console.error(e));
            //   console.log(state.currentWorkout);
            // for testing purposes
            // state.currentWorkout = workouts[0];
        },
        deleteWorkout(state, item) {
            fetch(`${server}/${state.username}/deleteWorkout`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                    })
                })
                .catch(e => console.error(e));
        },
        deleteExercise(state, item) {
            fetch(`${server}/${state.username}/deleteExercise`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                    })
                })
                .catch(e => console.error(e));
        },
    },
    getters: {
        exerciseTitles: state => {
            console.log(state);
            return state.exerciseObjects.map(x => x.title)
        },
        workoutTitles: state => {
            return state.workoutObjects.map(x => x.title)
        },
        validateExTitle: (state) => (item) => {
            // true for not exists, false for duplicates
            // check item title uniquness
            fetch(`${server}/validateExercise/${state.username}/${item}`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                        return (parsedJson === "true");
                    })
                })
                .catch(e => console.error(e));
        },
        validateUsername: (state) => (potentialUsername) => {
            // true for not exists, false for duplicates
            // query database to see if username has not been taken
            fetch(`${server}/validateUser/${potentialUsername}`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log(parsedJson);
                        return (parsedJson === "true");
                    })
                })
                .catch(e => console.error(e));
        },
        validateWorkoutTitle: (state) => (title) => {
            // true for not exists, false for duplicates
            fetch(`${server}/validateWorkout/${state.username}/${title}`, {method: "GET", body: null})
                .then(function (response) {
                    response.json().then(function (parsedJson) {
                        console.log("dfasdfasdfasdfasdfasdfasdfasdfasdfs");
                        const a = ((parsedJson === "true") || (parsedJson === true));
                        console.log(a);
                        return a;
                    })
                })
                .catch(e => console.error(e));
        },
        getExerciseTitlesForWorkout: (state) => {
            if (state.currentWorkout === null) {
                return []
            } else {
                return state.currentWorkout.exercisesAndRests;
            }
        },
        getExerciseByTitle: (state) => (title, exerciseTitles) => {
            let workout = {
                title,
                exercisesAndRests: exerciseTitles,
                equipment: [],
                custom: 'false'
            };

            for (let x = 0; x < state.exerciseObjects.length; x++) {
                if (exerciseTitles.includes(state.exerciseObjects[x]['title'])) {

                    if (!workout.equipment.includes(state.exerciseObjects[x].equipment)) {
                        workout.equipment.push(state.exerciseObjects[x].equipment);
                    }

                }
            }
            return workout;
        }
    },
    actions: {
        setData(context) {
            context.commit('setData');
        },
        // alias of resgister user
        setUsername(context, username) {
            context.commit('setUsername', username);
        },

        restoreUser(context, username) {
            context.commit('restoreUser', username);
        },

        deleteUser(context, username) {
            context.commit('deleteUser', username);
        },

        setCurrentObjItem(context, item) {
            context.commit('setCurrentObjItem', item);
        },

        addExercise(context, item) {
            // item: exercise object
            context.commit('upsertExercise', item);
        },
        addWorkout(context, item) {
            // item: workout object
            context.commit('upsertWorkout', item);
        },

        saveWorkoutEdit(context, item) {
            // item: workout object
            context.commit('upsertWorkout', item);
            for (let x = 0; x < context.state.workoutObjects.length; x++) {
                if (item.title === context.state.workoutObjects[x]['title']) {
                    context.state.workoutObjects[x] = item;
                }
            }
        },

        saveExerciseEdit(context, item) {
            // item: exercise object
            context.commit('upsertExercise', item);
            for (let x = 0; x < context.state.exerciseObjects.length; x++) {
                if (item.title === context.state.exerciseObjects[x]['title']) {
                    context.state.exerciseObjects[x] = item;
                }
            }
        },

        deleteExercise(context, item) {
            // item: exercise object
            context.commit('deleteExercise', item);
        },

        deleteWorkout(context, item) {
            // item: workout object
            context.commit('deleteWorkout', item);
        },


    }
});

Vue.prototype.$store = store;

export {store};
