const {MongoMemoryServer} = require('mongodb-memory-server');
const {register, restore, delete_user, validate_user} = require('./account');
const {
    retrieveExercise,
    upsertExercise,
    deleteExercise,
    lookupExerciseByTitle,
    validateExerciseByTitle
} = require('./exercises');

const {
    retrieveWorkout,
    upsertWorkout,
    deleteWorkout,
    lookupWorkoutByTitle,
    validateWorkoutByTitle
} = require('./workouts');
const mongoose = require('mongoose');


mongoose.set('useFindAndModify', false);

let mongoServer;
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, opts, (err) => {
        if (err) console.error(err);
    });

    let userID = 'default';
    await upsertExercise(userID,
        ['Biceps Brachii', 'Anterior Deltoid'],
        ['Biceps Brachii', 'Anterior Deltoid'],
        'almost full',
        ['none'],
        'false',
        'Circumducted Push Up');

    await upsertWorkout(userID,
        ['Tricep Extension', 'Chest Flys', 'Back Extensions', 'Push Up Shrugs', 'Front Raise', 'Lateral Raise'],
        ['cables', 'bench'],
        'false',
        'Upper Body Isolated Push');
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('test account', () => {

    it('register, validate and delete user', async () => {
        let userID = '123456';
        await validate_user(userID)
            .then(result => {
                expect(result).toEqual(true);
            });

        await register(userID);

        await validate_user(userID)
            .then(result => {
                expect(result).toEqual(false);
            });

        await delete_user(userID);

        await validate_user(userID)
            .then(result => {
                expect(result).toEqual(true);
            });
    });

    it('restore user', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await upsertExercise(userID,
            ['Biceps Brachii'],
            ['Biceps Brachii'],
            'full',
            ['barbell', 'dumbbells', 'machine', 'cable'],
            'false',
            'Bicep Curl'
        );
        await upsertWorkout(userID,
            ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
            ['dumbbells', 'bar'],
            false,
            'Upper Body Isolated Pull');
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(2);
        });
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(2);
        });

        await restore(userID);

        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await delete_user(userID);
    });


});

describe('test exercise', () => {
    it('delete exercise', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await upsertExercise(userID,
            ['Biceps Brachii'],
            ['Biceps Brachii'],
            'full',
            ['barbell', 'dumbbells', 'machine', 'cable'],
            'false',
            'Bicep Curl'
        );
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(2);
        });

        await deleteExercise(userID, 'Bicep Curl');
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await delete_user(userID);
    });

    it('lookup exercise by title', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await lookupExerciseByTitle(userID, 'Bicep Curl').then(result => {
            expect(result).toEqual([]);
        });
        await upsertExercise(userID,
            ['Biceps Brachii'],
            ['Biceps Brachii'],
            'full',
            ['barbell', 'dumbbells', 'machine', 'cable'],
            'false',
            'Bicep Curl'
        );
        await lookupExerciseByTitle(userID, 'Bicep Curl').then(result => {
            expect(result).toEqual(expect.objectContaining({
                title: 'Bicep Curl',
                musclesWorked: ['Biceps Brachii'],
                primaryMusclesWorked: ['Biceps Brachii'],
                ROM: 'full',
                equipment: ['barbell', 'dumbbells', 'machine', 'cable'],
                custom: 'false'
            }));
        });
        await delete_user(userID);
    });

    it('validate exercise by title', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveExercise(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await validateExerciseByTitle(userID, 'Bicep Curl').then(result => {
            expect(result).toEqual(true);
        });
        await upsertExercise(userID,
            ['Biceps Brachii'],
            ['Biceps Brachii'],
            'full',
            ['barbell', 'dumbbells', 'machine', 'cable'],
            'false',
            'Bicep Curl'
        );
        await validateExerciseByTitle(userID, 'Bicep Curl').then(result => {
            expect(result).toEqual(false);
        });
        await delete_user(userID);
    });
});

describe('test workout', () => {
    it('delete workout', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await upsertWorkout(userID,
            ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
            ['dumbbells', 'bar'],
            false,
            'Upper Body Isolated Pull');
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(2);
        });

        await deleteWorkout(userID, 'Upper Body Isolated Pull');
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await delete_user(userID);
    });

    it('lookup workout by title', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await lookupWorkoutByTitle(userID, 'Upper Body Isolated Pull').then(result => {
            expect(result).toEqual([]);
        });
        await upsertWorkout(userID,
            ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
            ['dumbbells', 'bar'],
            'false',
            'Upper Body Isolated Pull');
        await lookupWorkoutByTitle(userID, 'Upper Body Isolated Pull').then(result => {
            expect(result).toEqual(expect.objectContaining({
                title: 'Upper Body Isolated Pull',
                exercisesAndRests: ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
                equipment: ['dumbbells', 'bar'],
                custom: 'false'
            }));
        });
        await delete_user(userID);
    });

    it('validate workout by title', async () => {
        let userID = '123456';
        await register(userID);
        await retrieveWorkout(userID).then(result => {
            expect(result).toHaveLength(1);
        });
        await validateWorkoutByTitle(userID, 'Upper Body Isolated Pull').then(result => {
            expect(result).toEqual(true);
        });
        await upsertWorkout(userID,
            ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
            ['dumbbells', 'bar'],
            'false',
            'Upper Body Isolated Pull');
        await validateWorkoutByTitle(userID, 'Upper Body Isolated Pull').then(result => {
            expect(result).toEqual(false);
        });
        await delete_user(userID);
    });
});