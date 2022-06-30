const physics = [
    {
        'qst': 'An object is weightless when it is:',
        'ans1': 'In motion',
        'ans2': 'Being accelerated',
        'ans3': 'Stationary',
        'ans4': 'In freefall',
        'correct': 'In freefall'
    },
    {
        'qst': 'Which one among the following units cannot be used to express work',
        'ans1': '9.8 meters',
        'ans2': '16.9 meters',
        'ans3': '39.2 meters',
        'ans4': '7 meters',
        'correct': '16.9 meters'
    },
    {
        'qst': 'How far from your hand has a falling object gone when 2 seconds had already elapsed after releasing it',
        'ans1': 'In motion',
        'ans2': 'Being accelerated',
        'ans3': 'Stationary',
        'ans4': 'In freefall',
        'correct': 'In freefall'
    },
    {
        'qst': 'In a certain equation, X=Fv where F is the force applied and v is the velocity. What is X',
        'ans1': 'Work',
        'ans2': 'Power',
        'ans3': 'Distance',
        'ans4': 'Momentum',
        'correct': 'Power'
    },
    {
        'qst': 'What is the potential difference in a circuit that has a magnetic flux density of 3 Teslas, conductor length of 2 meters, and current flow velocity of 5 meters per second',
        'ans1': '1.2 volts',
        'ans2': '7.5 volts',
        'ans3': '3.33 volts',
        'ans4': '30 volts',
        'correct': '30 volts'
    },
    {
        'qst': 'Which of the following is an appropriate derived unit for Tesla',
        'ans1': 'Volts per square meter',
        'ans2': 'Amperes per second',
        'ans3': 'Farads per Volt-second',
        'ans4': 'Weber per square meter',
        'correct': 'Weber per square meter'
    },
    {
        'qst': 'What best describes / states what does SI stand for:',
        'ans1': 'An international system that represnts motion',
        'ans2': 'international system of units',
        'ans3': 'Metric system',
        'ans4': 'System for worldwide measurements',
        'correct': 'international system of units'
    },
    {
        'qst': 'In short, what are shadows',
        'ans1': 'Us blocking the sun',
        'ans2': 'The dispersion of the sun',
        'ans3': 'The absence of light',
        'ans4': 'Our inner souls',
        'correct': 'The absence of light'
    },
    {
        'qst': 'Which best represents Newton\'s second law of motion',
        'ans1': 'A person riding a bicycle',
        'ans2': 'Pulling different objects with the same force that are both too heavy to move',
        'ans3': 'A picture hanging on the wall not falling',
        'ans4': 'How a magician pulls a table cloth without disturbing the dishes',
        'correct': 'A person riding a bicycle'
    },
    {
        'qst': 'What type of simple machine is a seesaw',
        'ans1': 'Inclined plane',
        'ans2': 'Lever',
        'ans3': 'Pulley',
        'ans4': 'Wedge',
        'correct': 'Lever'
    },
]
export default physics.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))