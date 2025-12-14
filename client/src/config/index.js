export const registerFormControls =[
    {
        name:'patientName',
        label:'Patient Name',
        placeholder:'Enter your name',
        componentType:'input',
        type:'text'
    },
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your email',
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your password',
        componentType:'input',
        type:'password'
    },
    {
        name:'age',
        label:'Age',
        placeholder:'Enter your age',
        componentType:'input',
        type:'number'
    },
    {
       name:'phone',
       label:'Phone number',
       placeholder:'Enter your phone number',
       componentType:'input',
       type:'number'
    },
    {
        name:'gender',
        label:'Gender',
        placeholder:'Select your gender',
        componentType:'select',
        options:[
            {id:'male', label   :'Male'},
            {id:'female', label:'Female'},
            {id:'other', label :'Other'},
        ]
    }
]

// Physiotherapy Exercise Data
export const physiotherapyExercises = {
  // Shoulder-related body parts
  left_shoulder: [
    {
      id: 1,
      name: 'Pendulum Swings',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lean over, letting the affected arm hang down. Gently swing the arm in small circles, forward and backward, or side to side. Increase the diameter as it feels comfortable.',
      sets: 3,
      reps: '10-15 circles',
      duration: '2-3 minutes',
      painLevel: '0-5/10',
      instructions: [
        'Stand or bend forward from the waist',
        'Let the affected arm hang freely',
        'Gently swing in small circles',
        'Gradually increase circle diameter',
        'Perform in multiple directions'
      ]
    },
    {
      id: 2,
      name: 'Doorframe Stretch',
      type: 'Stretching',
      equipment: 'Doorframe',
      difficulty: 'Beginner',
      description: 'Stand in a doorway with your hands on the frame, elbows at a 90-degree angle. Step forward into the doorway to feel a stretch in your chest and shoulder. Hold for 20-30 seconds.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '20-30 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Stand in a doorway',
        'Place hands on the doorframe',
        'Keep elbows at 90-degree angle',
        'Step forward slowly',
        'Feel stretch in chest and shoulder',
        'Hold for 20-30 seconds'
      ]
    },
    {
      id: 3,
      name: 'Arm Circles',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Perform small, gentle circles with your arms to warm up the muscles and improve blood flow. Do this in both forward and backward directions.',
      sets: 3,
      reps: '10 forward, 10 backward',
      duration: '2-3 minutes',
      painLevel: '0-3/10',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Extend arms out to the sides',
        'Make small circles forward',
        'Reverse direction and make backward circles',
        'Gradually increase circle size as tolerated'
      ]
    },
    {
      id: 4,
      name: 'Cross-Body Shoulder Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lie on your side with the affected arm underneath you and bent at a 90-degree angle. Use your unaffected arm to gently push the affected arm down until you feel a stretch in the back of the shoulder.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '30 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Lie on your unaffected side',
        'Bend affected arm to 90 degrees',
        'Use other arm to gently push',
        'Feel stretch in back of shoulder',
        'Hold for 30 seconds',
        'Repeat on both sides'
      ]
    },
    {
      id: 5,
      name: 'Wall Slide',
      type: 'Strengthening',
      equipment: 'Wall',
      difficulty: 'Intermediate',
      description: 'Stand facing a wall, with your forearms against it and thumbs pointing away. Keeping your shoulder blades back and together, slowly slide your arms up the wall as far as you can, then lower them back down.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-4/10',
      instructions: [
        'Stand facing a wall',
        'Place forearms against wall',
        'Thumbs pointing upward',
        'Slide arms up the wall slowly',
        'Keep shoulder blades together',
        'Slide back down to starting position'
      ]
    },
    {
      id: 6,
      name: 'Scapular Squeezes',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Stand with your arms at your sides, bent at a 90-degree angle with palms facing up. Gently push your forearms outward and squeeze your shoulder blades together. Hold for a second before returning to the start.',
      sets: 3,
      reps: '15-20 repetitions',
      duration: '1-2 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Stand upright',
        'Bend arms at 90 degrees',
        'Palms facing up',
        'Squeeze shoulder blades together',
        'Push forearms outward',
        'Hold for 1-2 seconds',
        'Return to starting position'
      ]
    },
    {
      id: 7,
      name: 'Stick/Broom Handle Exercises',
      type: 'Mobility',
      equipment: 'Stick or Broom Handle',
      difficulty: 'Intermediate',
      description: 'Hold a stick with both hands. Use the stick to guide your arms to lift up in front or push one arm out to the side. You can also hold it behind your back to lift your arms up and back.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-4/10',
      instructions: [
        'Hold stick with both hands',
        'Lift arms up in front slowly',
        'Use stick as guide for support',
        'Perform side-to-side movements',
        'Hold behind back for back lifts',
        'Move within comfortable range'
      ]
    }
  ],
  right_shoulder: [
    {
      id: 8,
      name: 'Pendulum Swings',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lean over, letting the affected arm hang down. Gently swing the arm in small circles, forward and backward, or side to side. Increase the diameter as it feels comfortable.',
      sets: 3,
      reps: '10-15 circles',
      duration: '2-3 minutes',
      painLevel: '0-5/10',
      instructions: [
        'Stand or bend forward from the waist',
        'Let the affected arm hang freely',
        'Gently swing in small circles',
        'Gradually increase circle diameter',
        'Perform in multiple directions'
      ]
    },
    {
      id: 9,
      name: 'Doorframe Stretch',
      type: 'Stretching',
      equipment: 'Doorframe',
      difficulty: 'Beginner',
      description: 'Stand in a doorway with your hands on the frame, elbows at a 90-degree angle. Step forward into the doorway to feel a stretch in your chest and shoulder.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '20-30 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Stand in a doorway',
        'Place hands on the doorframe',
        'Keep elbows at 90-degree angle',
        'Step forward slowly',
        'Feel stretch in chest and shoulder',
        'Hold for 20-30 seconds'
      ]
    },
    {
      id: 10,
      name: 'Arm Circles',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Perform small, gentle circles with your arms to warm up the muscles and improve blood flow.',
      sets: 3,
      reps: '10 forward, 10 backward',
      duration: '2-3 minutes',
      painLevel: '0-3/10',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Extend arms out to the sides',
        'Make small circles forward',
        'Reverse direction and make backward circles',
        'Gradually increase circle size'
      ]
    },
    {
      id: 11,
      name: 'Cross-Body Shoulder Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Stretch the back of your shoulder by gently pulling your arm across your body.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '30 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Use opposite arm to pull affected arm',
        'Pull arm across your body',
        'Feel stretch in back of shoulder',
        'Hold for 30 seconds',
        'Breathe deeply'
      ]
    },
    {
      id: 12,
      name: 'Wall Push-ups',
      type: 'Strengthening',
      equipment: 'Wall',
      difficulty: 'Beginner',
      description: 'Stand facing a wall and place your hands on it, slightly wider than shoulder-width apart. Bend your elbows and lower your body toward the wall, then push back.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-4/10',
      instructions: [
        'Stand facing wall',
        'Hands wider than shoulder-width',
        'Bend elbows slowly',
        'Lower body toward wall',
        'Push back to starting position',
        'Keep body straight'
      ]
    }
  ],
  // Back and abdomen
  stomach: [
    {
      id: 13,
      name: 'Pelvic Tilt',
      type: 'Core Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lie on your back with knees bent and feet flat. Gently tighten your abdominal muscles to pull your lower back up, away from the floor. Hold for five seconds and repeat.',
      sets: 3,
      reps: '5-30 repetitions',
      duration: '5 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Lie on your back',
        'Bend knees, feet flat on floor',
        'Tighten abdominal muscles',
        'Pull lower back away from floor',
        'Hold for 5 seconds',
        'Release and repeat'
      ]
    },
    {
      id: 14,
      name: 'Single Knee to Chest',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lie on your back with knees bent. Pull one knee to your chest, hold for 10-30 seconds, then repeat with the other leg.',
      sets: 3,
      reps: '5-10 repetitions per side',
      duration: '10-30 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Lie on your back',
        'Bend knees, feet on floor',
        'Pull one knee to chest',
        'Hold for 10-30 seconds',
        'Keep other foot on ground',
        'Repeat with other leg'
      ]
    },
    {
      id: 15,
      name: 'Bridge',
      type: 'Core Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Intermediate',
      description: 'Lie on your back with knees bent and feet flat. Tighten your abdominal and buttock muscles and lift your hips to form a straight line from your knees to your shoulders.',
      sets: 3,
      reps: '5-30 repetitions',
      duration: '3 deep breaths per rep',
      painLevel: '0-4/10',
      instructions: [
        'Lie on your back',
        'Bend knees, feet flat',
        'Tighten abdominal and buttock muscles',
        'Lift hips up',
        'Form straight line from knees to shoulders',
        'Hold for 3 deep breaths',
        'Lower back down slowly'
      ]
    },
    {
      id: 16,
      name: 'Cat-Cow Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Start on your hands and knees. Slowly arch your back up towards the ceiling, tucking your chin. Then slowly let your belly sag and look up.',
      sets: 2,
      reps: '3-5 repetitions',
      duration: '2-3 times daily',
      painLevel: '0-3/10',
      instructions: [
        'Get on hands and knees',
        'Arch back toward ceiling',
        'Tuck chin to chest',
        'Then relax belly toward floor',
        'Look up slightly',
        'Move slowly and controlled'
      ]
    }
  ],
  // Legs and knees
  left_leg_upper: [
    {
      id: 17,
      name: 'Quad Strengthening - Lying Leg Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lie flat on your back and straighten one leg. Tighten the thigh muscle and lift the leg about 12 inches off the ground. Hold and lower slowly.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Lie on your back',
        'Keep one leg bent',
        'Straighten other leg',
        'Tighten thigh muscle',
        'Lift leg 12 inches high',
        'Lower slowly without touching ground'
      ]
    },
    {
      id: 18,
      name: 'Static Quadriceps Strengthening',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'While seated, place a rolled towel under one knee. Tighten the thigh muscle above the knee and hold for 5-10 seconds. Relax and repeat.',
      sets: 3,
      reps: '15-20 repetitions',
      duration: '5-10 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair',
        'Place rolled towel under knee',
        'Tighten thigh muscle',
        'Hold for 5-10 seconds',
        'Relax and repeat',
        'Feel muscle tightening'
      ]
    },
    {
      id: 19,
      name: 'Supported Leg Raises',
      type: 'Strengthening',
      equipment: 'Chair or Support',
      difficulty: 'Beginner',
      description: 'Hold onto a chair or counter for balance. Stand on one leg and slowly raise the other leg in front of you. Hold and lower slowly.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Hold onto a sturdy chair',
        'Stand on one leg',
        'Raise other leg forward',
        'Keep raised leg straight',
        'Hold for 2-3 seconds',
        'Lower slowly'
      ]
    },
    {
      id: 20,
      name: 'Wall Sit',
      type: 'Strengthening',
      equipment: 'Wall',
      difficulty: 'Intermediate',
      description: 'Stand with your back against a wall. Slowly slide down until your knees are bent at about 90 degrees. Hold this position and then slide back up.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '10-30 seconds per hold',
      painLevel: '0-4/10',
      instructions: [
        'Stand with back against wall',
        'Feet shoulder-width apart',
        'Slide down slowly',
        'Bend knees to 90 degrees',
        'Hold position',
        'Slide back up'
      ]
    },
    {
      id: 21,
      name: 'Hamstring Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit on the floor with one leg extended. Reach toward your toes and hold the stretch for 30 seconds. Repeat on the other side.',
      sets: 3,
      reps: '5-10 repetitions per side',
      duration: '30 seconds per stretch',
      painLevel: '0-3/10',
      instructions: [
        'Sit on floor',
        'Extend one leg',
        'Bend at waist',
        'Reach toward toes',
        'Feel stretch in back of thigh',
        'Hold for 30 seconds'
      ]
    }
  ],
  right_leg_upper: [
    {
      id: 22,
      name: 'Quad Strengthening - Lying Leg Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Lie flat on your back and straighten one leg. Tighten the thigh muscle and lift the leg about 12 inches off the ground.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Lie on your back',
        'Keep one leg bent',
        'Straighten other leg',
        'Tighten thigh muscle',
        'Lift leg 12 inches high',
        'Lower slowly'
      ]
    },
    {
      id: 23,
      name: 'Static Quadriceps Strengthening',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'While seated, place a rolled towel under one knee and tighten the thigh muscle.',
      sets: 3,
      reps: '15-20 repetitions',
      duration: '5-10 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair',
        'Place rolled towel under knee',
        'Tighten thigh muscle',
        'Hold for 5-10 seconds',
        'Relax and repeat'
      ]
    },
    {
      id: 24,
      name: 'Wall Sit',
      type: 'Strengthening',
      equipment: 'Wall',
      difficulty: 'Intermediate',
      description: 'Stand with your back against a wall. Slowly slide down until your knees are bent at about 90 degrees.',
      sets: 3,
      reps: '5-10 repetitions',
      duration: '10-30 seconds per hold',
      painLevel: '0-4/10',
      instructions: [
        'Stand with back against wall',
        'Feet shoulder-width apart',
        'Slide down slowly',
        'Bend knees to 90 degrees',
        'Hold position',
        'Slide back up'
      ]
    },
    {
      id: 25,
      name: 'Hamstring Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit on the floor with one leg extended and reach toward your toes.',
      sets: 3,
      reps: '5-10 repetitions per side',
      duration: '30 seconds per stretch',
      painLevel: '0-3/10',
      instructions: [
        'Sit on floor',
        'Extend one leg',
        'Bend at waist',
        'Reach toward toes',
        'Feel stretch in back of thigh',
        'Hold for 30 seconds'
      ]
    }
  ],
  // Lower leg and calves
  left_leg_lower: [
    {
      id: 26,
      name: 'Calf Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Stand holding onto a chair for balance. Rise up onto your toes, hold, and lower back down. This strengthens your calf muscles.',
      sets: 4,
      reps: '15-20 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Stand upright, hold chair',
        'Rise up onto toes',
        'Hold for 2-3 seconds',
        'Lower heels back down',
        'Keep movement controlled',
        'Repeat slowly'
      ]
    },
    {
      id: 27,
      name: 'Calf Stretch',
      type: 'Stretching',
      equipment: 'Wall',
      difficulty: 'Beginner',
      description: 'Stand facing a wall with one leg behind you. Keep your back heel on the ground and bend your front knee to stretch the back leg\'s calf.',
      sets: 3,
      reps: '5-10 repetitions per side',
      duration: '30 seconds per stretch',
      painLevel: '0-3/10',
      instructions: [
        'Face a wall',
        'One leg extended behind',
        'Keep heel on ground',
        'Bend front knee',
        'Feel stretch in calf',
        'Hold for 30 seconds'
      ]
    },
    {
      id: 28,
      name: 'Heel Slides',
      type: 'Mobility',
      equipment: 'Floor',
      difficulty: 'Beginner',
      description: 'Lie on your back with knees bent. Slowly slide one heel forward to straighten the leg, then slide it back to starting position.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Lie on your back',
        'Bend both knees',
        'Slide heel forward slowly',
        'Straighten leg on floor',
        'Slide heel back to bent position',
        'Alternate legs'
      ]
    }
  ],
  right_leg_lower: [
    {
      id: 29,
      name: 'Calf Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Stand holding onto a chair for balance. Rise up onto your toes, hold, and lower back down.',
      sets: 4,
      reps: '15-20 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Stand upright, hold chair',
        'Rise up onto toes',
        'Hold for 2-3 seconds',
        'Lower heels back down',
        'Keep movement controlled'
      ]
    },
    {
      id: 30,
      name: 'Calf Stretch',
      type: 'Stretching',
      equipment: 'Wall',
      difficulty: 'Beginner',
      description: 'Stand facing a wall with one leg behind you. Keep your back heel on the ground and bend your front knee.',
      sets: 3,
      reps: '5-10 repetitions per side',
      duration: '30 seconds per stretch',
      painLevel: '0-3/10',
      instructions: [
        'Face a wall',
        'One leg extended behind',
        'Keep heel on ground',
        'Bend front knee',
        'Feel stretch in calf',
        'Hold for 30 seconds'
      ]
    },
    {
      id: 31,
      name: 'Heel Slides',
      type: 'Mobility',
      equipment: 'Floor',
      difficulty: 'Beginner',
      description: 'Lie on your back with knees bent. Slowly slide one heel forward to straighten the leg.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Lie on your back',
        'Bend both knees',
        'Slide heel forward slowly',
        'Straighten leg on floor',
        'Slide heel back',
        'Alternate legs'
      ]
    }
  ],
  // Arms and hands
  left_arm: [
    {
      id: 32,
      name: 'Wrist Extension',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Support your forearm on a table with your palm facing down. Use your other hand to lift your wrist upwards. You can progress to light weights.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Forearm on table, palm down',
        'Lift wrist upward',
        'Lower wrist slowly',
        'Repeat with control',
        'No weight initially'
      ]
    },
    {
      id: 33,
      name: 'Wrist Flexion',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'With your palm facing up, bend your wrist up toward your body. Slowly lower your wrist back to the starting position.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Forearm on table, palm up',
        'Bend wrist toward body',
        'Lower wrist slowly',
        'Control the movement'
      ]
    },
    {
      id: 34,
      name: 'Forearm Rotation (Supination/Pronation)',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Rest your forearm on a table with elbow bent at 90 degrees and thumb pointing up. Slowly rotate your forearm so your palm faces down, then back up.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Elbow bent at 90 degrees',
        'Thumb pointing up initially',
        'Rotate palm to face down',
        'Rotate back to starting position',
        'Move slowly and controlled'
      ]
    },
    {
      id: 35,
      name: 'Towel Twist',
      type: 'Strengthening',
      equipment: 'Towel',
      difficulty: 'Beginner',
      description: 'Hold a towel with both hands and twist it in opposite directions, as if wringing it out. This builds forearm strength.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Hold a towel with both hands',
        'Twist in opposite directions',
        'Like wringing out water',
        'Hold each twist 2-3 seconds',
        'Release and repeat'
      ]
    },
    {
      id: 36,
      name: 'Grip Strengthening',
      type: 'Strengthening',
      equipment: 'Stress Ball or Grippers',
      difficulty: 'Beginner',
      description: 'Squeeze a ball or use grippers to build hand and forearm strength. Squeeze and hold for a few seconds.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '3-5 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Hold a stress ball',
        'Squeeze firmly',
        'Hold for 3-5 seconds',
        'Release slowly',
        'Repeat with control'
      ]
    }
  ],
  right_arm: [
    {
      id: 37,
      name: 'Wrist Extension',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Support your forearm on a table with your palm facing down. Use your other hand to lift your wrist upwards.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Forearm on table, palm down',
        'Lift wrist upward',
        'Lower wrist slowly',
        'Repeat with control'
      ]
    },
    {
      id: 38,
      name: 'Wrist Flexion',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'With your palm facing up, bend your wrist up toward your body.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Forearm on table, palm up',
        'Bend wrist toward body',
        'Lower wrist slowly'
      ]
    },
    {
      id: 39,
      name: 'Forearm Rotation',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Rest your forearm on a table with elbow bent at 90 degrees. Slowly rotate your forearm.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-3/10',
      instructions: [
        'Sit at a table',
        'Elbow bent at 90 degrees',
        'Rotate palm down and up',
        'Move slowly and controlled'
      ]
    },
    {
      id: 40,
      name: 'Grip Strengthening',
      type: 'Strengthening',
      equipment: 'Stress Ball or Grippers',
      difficulty: 'Beginner',
      description: 'Squeeze a ball or use grippers to build hand and forearm strength.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '3-5 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Hold a stress ball',
        'Squeeze firmly',
        'Hold for 3-5 seconds',
        'Release slowly'
      ]
    }
  ],
  // Head and neck
  head: [
    {
      id: 41,
      name: 'Neck Flexion Stretch',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Gentle neck stretching exercise to improve flexibility and reduce tension. Slowly tilt your head forward.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '15-20 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit upright',
        'Slowly tilt head forward',
        'Feel gentle stretch at back of neck',
        'Hold for 15-20 seconds',
        'Return to starting position'
      ]
    },
    {
      id: 42,
      name: 'Neck Rotation',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Rotational neck movement to improve mobility. Slowly turn your head side to side.',
      sets: 3,
      reps: '10 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit upright',
        'Slowly turn head to one side',
        'Feel gentle stretch on opposite side',
        'Hold for 2-3 seconds',
        'Return to center',
        'Repeat on other side'
      ]
    },
    {
      id: 43,
      name: 'Neck Lateral Flexion',
      type: 'Stretching',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Tilt your head toward each shoulder to stretch the side of your neck.',
      sets: 3,
      reps: '10 repetitions per side',
      duration: '15-20 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit upright',
        'Slowly tilt head toward shoulder',
        'Feel stretch on opposite side',
        'Hold for 15-20 seconds',
        'Return to center',
        'Repeat on other side'
      ]
    }
  ],
  // Feet
  left_foot: [
    {
      id: 44,
      name: 'Toe Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit or stand and raise your toes while keeping heels on the ground. This strengthens the muscles in the foot and ankle.',
      sets: 3,
      reps: '15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair or stand',
        'Keep heels on ground',
        'Raise toes upward',
        'Hold for 2-3 seconds',
        'Lower toes back down',
        'Repeat slowly'
      ]
    },
    {
      id: 45,
      name: 'Ankle Circles',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit with one leg extended or crossed over the other knee. Rotate your ankle in circles in both directions.',
      sets: 3,
      reps: '10 circles each direction',
      duration: '2-3 minutes',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair',
        'Extend one leg',
        'Rotate ankle in circles',
        'Go 10 circles one direction',
        'Reverse and go 10 circles other way',
        'Move slowly and gently'
      ]
    }
  ],
  right_foot: [
    {
      id: 46,
      name: 'Toe Raises',
      type: 'Strengthening',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit or stand and raise your toes while keeping heels on the ground.',
      sets: 3,
      reps: '15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair or stand',
        'Keep heels on ground',
        'Raise toes upward',
        'Hold for 2-3 seconds',
        'Lower toes back down'
      ]
    },
    {
      id: 47,
      name: 'Ankle Circles',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Sit with one leg extended or crossed over the other knee. Rotate your ankle in circles.',
      sets: 3,
      reps: '10 circles each direction',
      duration: '2-3 minutes',
      painLevel: '0-2/10',
      instructions: [
        'Sit in a chair',
        'Extend one leg',
        'Rotate ankle in circles',
        'Go 10 circles one direction',
        'Reverse and go 10 circles'
      ]
    }
  ],
  // Hands
  left_hand: [
    {
      id: 48,
      name: 'Wrist Curls',
      type: 'Strengthening',
      equipment: 'Light Dumbbell',
      difficulty: 'Beginner',
      description: 'An isolation exercise for forearm development. Hold a light weight and curl your wrist upward.',
      sets: 3,
      reps: '15-20 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Hold a light weight',
        'Rest forearm on table',
        'Curl wrist upward',
        'Lower slowly',
        'Keep movements controlled'
      ]
    },
    {
      id: 49,
      name: 'Finger Flexibility Exercises',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Open and close your hand, spread fingers wide, and make a fist. Helps maintain hand dexterity.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-1/10',
      instructions: [
        'Sit comfortably',
        'Make a fist slowly',
        'Open hand and spread fingers',
        'Repeat slowly',
        'Keep movements gentle'
      ]
    }
  ],
  right_hand: [
    {
      id: 50,
      name: 'Wrist Curls',
      type: 'Strengthening',
      equipment: 'Light Dumbbell',
      difficulty: 'Beginner',
      description: 'An isolation exercise for forearm development. Hold a light weight and curl your wrist.',
      sets: 3,
      reps: '15-20 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-2/10',
      instructions: [
        'Hold a light weight',
        'Rest forearm on table',
        'Curl wrist upward',
        'Lower slowly'
      ]
    },
    {
      id: 51,
      name: 'Finger Flexibility Exercises',
      type: 'Mobility',
      equipment: 'Bodyweight',
      difficulty: 'Beginner',
      description: 'Open and close your hand, spread fingers wide, and make a fist.',
      sets: 3,
      reps: '10-15 repetitions',
      duration: '2-3 seconds per rep',
      painLevel: '0-1/10',
      instructions: [
        'Sit comfortably',
        'Make a fist slowly',
        'Open hand and spread fingers',
        'Repeat slowly'
      ]
    }
  ]
}

export const loginFormControls = [
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your email.',
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your password.',
        componentType:'input',
        type:'password'
    }
]