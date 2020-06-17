
// BICEPS BRACHII

const circumductedPushUp = {
    title: 'Circumducted Push Up',
    musclesWorked: ['Biceps Brachii', 'Anterior Deltoid'],
    primaryMusclesWorked: ['Biceps Brachii', 'Anterior Deltoid'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const bicepCurl = {
    title: 'Bicep Curl',
    musclesWorked: ['Biceps Brachii'],
    primaryMusclesWorked: ['Biceps Brachii'],
    ROM: 'full',
    equipment: ['barbell', 'dumbbells', 'machine', 'cable'],
    custom: 'false'
};

const oneArmPullUp = {
    title: 'One Arm Pull Up',
    musclesWorked: ['Biceps Brachii', 'Forearm Flexors' , 'Latissimus Dorsi', 'Pectoralis Major'],
    primaryMusclesWorked: ['Biceps Brachii'],
    ROM: 'full',
    equipment: ['bar'],
    custom: 'false'
};

const chinUp = {
    title: 'Chin Up',
    musclesWorked: ['Biceps Brachii', 'Forearm Flexors' , 'Latissimus Dorsi'],
    primaryMusclesWorked: ['Biceps Brachii', 'Latissimus Dorsi'],
    ROM: 'full',
    equipment: ['bar'],
    custom: 'false'
};

const biceps = [chinUp, oneArmPullUp, bicepCurl, circumductedPushUp];

// TRICEPS BRACHII

const koreanDip = {
    title: 'Korean Dip',
    musclesWorked: ['Triceps Brachii'],
    primaryMusclesWorked: ['Triceps Brachii'],
    ROM: 'full',
    equipment: ['bar'],
    custom: 'false'
};

const narrowPushUp = {
    title: 'Narrow Push Up',
    musclesWorked: ['Anterior Deltoid', 'Triceps Brachii'],
    primaryMusclesWorked: ['Triceps Brachii', 'Anterior Deltoid'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const dip = {
    title: 'Dip',
    musclesWorked: ['Pectoralis Minor', 'Triceps Brachii'],
    primaryMusclesWorked: ['Triceps Brachii'],
    ROM: 'full',
    equipment: ['paralletes', 'chair', 'table', 'dip bars'],
    custom: 'false'
};

const tricepExtensions = {
    title: 'Tricep Extensions',
    musclesWorked: ['Triceps Brachii'],
    primaryMusclesWorked: ['Triceps Brachii'],
    ROM: 'full',
    equipment: ['machine', 'dumbbells', 'cable'],
    custom: 'false'
};

const tricepPushdowns = {
    title: 'Tricep Pushdowns',
    musclesWorked: ['Triceps Brachii'],
    primaryMusclesWorked: ['Triceps Brachii'],
    ROM: 'full',
    equipment: ['machine', 'cable'],
    custom: 'false'
};

const closeGripBenchPress = {
    title: 'Close Grip Bench Press',
    musclesWorked: ['Triceps Brachii', 'Pectoralis Major'],
    primaryMusclesWorked: ['Triceps Brachii', 'Pectoralis Major'],
    ROM: 'full',
    equipment: ['barbell'],
    custom: 'false'
};

const triceps = [closeGripBenchPress, tricepExtensions, tricepPushdowns, dip, narrowPushUp, koreanDip];

// FOREARM FLEXORS



// FOREARM EXTENSORS



// ANTERIOR DELTOID

const shoulderPresses = {
    title: 'Shoulder Presses',
    musclesWorked: ['Anterior Deltoid'],
    primaryMusclesWorked: ['Anterior Deltoid'],
    ROM: 'full',
    equipment: ['machine', 'dumbbells', 'cables'],
    custom: 'false'
};

const frontRaise = {
    title: 'Front Raise',
    musclesWorked: ['Anterior Deltoid'],
    primaryMusclesWorked: ['Anterior Deltoid'],
    ROM: 'full',
    equipment: ['dumbbells', 'cables'],
    custom: 'false'
};

const handstand = {
    title: 'Handstand',
    musclesWorked: ['Anterior Deltoid', 'Triceps Brachii'],
    primaryMusclesWorked: ['Anterior Deltoid', 'Triceps Brachii'],
    ROM: 'isometric',
    equipment: ['none'],
    custom: 'false'
};

const handstandPushUp = {
    title: 'Handstand Push Up',
    musclesWorked: ['Anterior Deltoid', 'Triceps Brachii'],
    primaryMusclesWorked: ['Anterior Deltoid', 'Triceps Brachii'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const antDelt = [handstand, handstandPushUp, frontRaise, shoulderPresses];

// LATERAL DELTOID

const lateralRaise = {
    title: 'Lateral Raises',
    musclesWorked: ['Lateral Deltoid'],
    primaryMusclesWorked: ['Lateral Deltoid'],
    ROM: 'full',
    equipment: ['dumbbells', 'cables'],
    custom: 'false'
};

const latDelt = [lateralRaise];

// POSTERIOR DELTOID

const rearDeltoidFlys = {
    title: 'Rear Deltoid Flys',
    musclesWorked: ['Posterior Deltoid', 'Rhomboid Major'],
    primaryMusclesWorked: ['Lateral Deltoid', 'Rhomboid Major'],
    ROM: 'almost full',
    equipment: ['dumbbells', 'cables'],
    custom: 'false'
};

const invertedRows = {
    title: 'Inverted Rows',
    musclesWorked: ['Posterior Deltoid', 'Biceps Brachii'],
    primaryMusclesWorked: ['Posterior Deltoid', 'Biceps Brachii'],
    ROM: 'almost full',
    equipment: ['dip bar'],
    custom: 'false'
};

const facePulls = {
    title: 'Face Pulls',
    musclesWorked: ['Posterior Deltoid', 'Rhomboid Major', 'Biceps Brachii'],
    primaryMusclesWorked: ['Posterior Deltoid'],
    ROM: 'full',
    equipment: ['cables'],
    custom: 'false'
};

const postDelt = [rearDeltoidFlys, invertedRows, facePulls];

// LATISSIMUS DORSI

const pullUp = {
    title: 'Pull Up',
    musclesWorked: ['Latissimus Dorsi', 'Forearm Flexors', 'Biceps Brachii'],
    primaryMusclesWorked: ['Latissimus Dorsi', 'Biceps Brachii'],
    ROM: 'full',
    equipment: ['bar'],
    custom: 'false'
};

const latPullDown = {
    title: 'Lat Pull Down',
    musclesWorked: ['Latissimus Dorsi'],
    primaryMusclesWorked: ['Latissimus Dorsi'],
    ROM: 'full',
    equipment: ['machine', 'cable'],
    custom: 'false'
};

const lats = [latPullDown, pullUp];

// PECTORALIS MAJOR

const chestDip = {
    title: 'Chest Dip',
    musclesWorked: ['Pectoralis Minor', 'Triceps Brachii', 'Pectoralis Major'],
    primaryMusclesWorked: ['Pectoralis Major'],
    ROM: 'almost full',
    equipment: ['dip bars'],
    custom: 'false'
};

const benchPress = {
    title: 'Bench Press',
    musclesWorked: ['Pectoralis Minor', 'Triceps Brachii', 'Pectoralis Major'],
    primaryMusclesWorked: ['Pectoralis Major'],
    ROM: 'almost full',
    equipment: ['barbell'],
    custom: 'false'
};

const wideGripPushUp = {
    title: 'Wide Grip Push Up',
    musclesWorked: ['Triceps Brachii', 'Pectoralis Major', 'Anterior Deltoid'],
    primaryMusclesWorked: ['Pectoralis Major', 'Anterior Deltoid'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const archerPushUp = {
    title: 'Archer Push Up',
    musclesWorked: ['Triceps Brachii', 'Pectoralis Major', 'Anterior Deltoid'],
    primaryMusclesWorked: ['Pectoralis Major', 'Anterior Deltoid'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const chestFlys = {
    title: 'Chest Flys',
    musclesWorked: ['Pectoralis Major'],
    primaryMusclesWorked: ['Pectoralis Major'],
    ROM: 'full',
    equipment: ['dumbbells', 'cables'],
    custom: 'false'
};

const chest = [chestFlys, archerPushUp, wideGripPushUp, benchPress, chestDip];

// SERRATUS ANTERIOR

const pushUpShrugs = {
    title: 'Push Up Shrugs',
    musclesWorked: ['Pectoralis Minor', 'Triceps Brachii', 'Serratus Anterior', 'Anterior Deltoid'],
    primaryMusclesWorked: ['Serratus Anterior'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const serratus = [pushUpShrugs];

// UPPER TRAPEZIUS

const shrugs = {
    title: 'Shrugs',
    musclesWorked: ['Upper Trapezius'],
    primaryMusclesWorked: ['Upper Trapezius'],
    ROM: 'full',
    equipment: ['barbell, dumbbell, cables'],
    custom: 'false'
};

const upperTraps = [shrugs];

// LOWER TRAPEZIUS



// ROTATOR CUFF



// RHOMBOID MAJOR



// EXTENSORS

const backExtensions = {
    title: 'Full Back Extensions',
    musclesWorked: ['Erector Spinae'],
    primaryMusclesWorked: ['Erector Spinae'],
    ROM: 'full',
    equipment: ['bench'],
    custom: 'false'
};

const supermans = {
    title: 'Full Back Extensions',
    musclesWorked: ['Erector Spinae'],
    primaryMusclesWorked: ['Erector Spinae'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const erectors = [backExtensions, supermans];

// OBLIQUES

const russianTwists = {
    title: 'Russian Twists',
    musclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    primaryMusclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const bicycleTwists = {
    title: 'Bicycle Twists',
    musclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    primaryMusclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const windshieldWipers = {
    title: 'Windshield Wipers',
    musclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    primaryMusclesWorked: ['Rectus Abdominis', 'External Obliques', 'Internal Obliques'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const obliques = [russianTwists, bicycleTwists, windshieldWipers];

// ABDOMINALS

const crunches = {
    title: 'Crunches',
    musclesWorked: ['Rectus Abdominis'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const VUps = {
    title: 'V Ups',
    musclesWorked: ['Rectus Abdominis'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const reverseCrunches = {
    title: 'Reverse Crunches',
    musclesWorked: ['Rectus Abdominis'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const plank = {
    title: 'Planks',
    musclesWorked: ['Rectus Abdominis', 'Anterior Deltoid'],
    primaryMusclesWorked: ['Rectus Abdominis', 'Anterior Deltoid'],
    ROM: 'isometric',
    equipment: ['none'],
    custom: 'false'
};

const lSit = {
    title: 'L Sit',
    musclesWorked: ['Rectus Abdominis', 'Anterior Deltoid', 'Triceps Brachii'],
    primaryMusclesWorked: ['Rectus Abdominis', 'Anterior Deltoid', 'Triceps Brachii'],
    ROM: 'isometric',
    equipment: ['none'],
    custom: 'false'
};

const hangingLSit = {
    title: 'Hanging L Sit',
    musclesWorked: ['Rectus Abdominis', 'Forearm Flexors'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'isometric',
    equipment: ['bar'],
    custom: 'false'
};

const hangingLRaise = {
    title: 'Hanging L Raise',
    musclesWorked: ['Rectus Abdominis', 'Forearm Flexors'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'almost full',
    equipment: ['bar'],
    custom: 'false'
};

const toesToBar = {
    title: 'Toes To Bar',
    musclesWorked: ['Rectus Abdominis', 'Forearm Flexors'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'full',
    equipment: ['bar'],
    custom: 'false'
};

const toeTouches = {
    title: 'Toes To Bar',
    musclesWorked: ['Rectus Abdominis'],
    primaryMusclesWorked: ['Rectus Abdominis'],
    ROM: 'almost full',
    equipment: ['none'],
    custom: 'false'
};

const abs = [toeTouches, toesToBar, hangingLRaise, hangingLSit, lSit, plank, reverseCrunches, VUps, crunches]

// QUADS

const squats = {
    title: 'Squats',
    musclesWorked: ['Quadriceps'],
    primaryMusclesWorked: ['Quadriceps'],
    ROM: 'full',
    equipment: ['none', 'barbell', 'dumbbell'],
    custom: 'false'
};

const wallSit = {
    title: 'Wall Sit',
    musclesWorked: ['Quadriceps'],
    primaryMusclesWorked: ['Quadriceps'],
    ROM: 'isometric',
    equipment: ['none'],
    custom: 'false'
};

const bulgarianSplitSquats = {
    title: 'Bulgarian Split Squats',
    musclesWorked: ['Quadriceps'],
    primaryMusclesWorked: ['Quadriceps'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const quadriceps = [squats, wallSit, bulgarianSplitSquats];

// HAMMIES

const hamstringCurls = {
    title: 'Hamstring Curls',
    musclesWorked: ['Hamstring'],
    primaryMusclesWorked: ['Hamstring'],
    ROM: 'full',
    equipment: ['friend', 'machine'],
    custom: 'false'
};

const deadlift = {
    title: 'Deadlift',
    musclesWorked: ['Hamstring', 'Erector Spinae'],
    primaryMusclesWorked: ['Hamstring', 'Erector Spinae'],
    ROM: 'full',
    equipment: ['barbell'],
    custom: 'false'
};

const hamstring = [hamstringCurls, deadlift];

// CALF

const calfRaises = {
    title: 'Calf Raises',
    musclesWorked: ['Gastrocnemius'],
    primaryMusclesWorked: ['Gastrocnemius'],
    ROM: 'full',
    equipment: ['none', 'machine'],
    custom: 'false'
};

const calves = [calfRaises];

// TIBIALIS

const footFlexes = {
    title: 'Foot Flexes',
    musclesWorked: ['Anterior Tibialis'],
    primaryMusclesWorked: ['Anterior Tibialis'],
    ROM: 'full',
    equipment: ['none'],
    custom: 'false'
};

const tibialis = [footFlexes];

const exercises = tibialis.concat(calves, hamstring, quadriceps, abs, obliques, erectors, upperTraps, serratus, antDelt, postDelt, latDelt, biceps, triceps, lats, chest);

const upperIsoPush = {
        title: 'Upper Body Isolated Push',
        exercisesAndRests: ['Tricep Extension', 'Chest Flys', 'Back Extensions', 'Push Up Shrugs', 'Front Raise', 'Lateral Raise'],
        equipment: ['cables', 'bench'],
        custom: false
}

const upperIsoPull = {
    title: 'Upper Body Isolated Pull',
    exercisesAndRests: ['Shrugs', 'Rear Delt Flys', 'Toes To Bar', 'Bicep Curls', 'Pull Ups'],
    equipment: ['dumbbells', 'bar'],
    custom: false
}

const lowerIso = {
    title: 'Lower Body Isolated',
    exercisesAndRests: ['Calf Raises', 'Foot Flexes', 'Hamstring Curls', 'Squats'],
    equipment: ['machine'],
    custom: false
}

const workouts = [upperIsoPush, upperIsoPull, lowerIso];

module.exports = {workouts, exercises};
