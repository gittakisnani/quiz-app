const general = [
    {
        'qst': 'Who was the first person in space',
        'ans1': 'Yuri Gagarin',
        'ans2': 'Joseph M. Acaba',
        'ans3': 'James Adamson',
        'ans4': 'Hazza Al Mansouri',
        'correct': 'Yuri Gagarin'
    },
    {
        'qst': 'What is the chemical symbol of Tungsten',
        'ans1': 'S',
        'ans2': 'Fe',
        'ans3': 'Tg',
        'ans4': 'W',
        'correct': 'W'
    },
    {
        'qst': 'What is the capital of Finland',
        'ans1': 'Roma',
        'ans2': 'Lisbon',
        'ans3': 'Helsinki',
        'ans4': 'Cairo',
        'correct': 'Helsinki'
    },
    {
        'qst': 'Who painted the Mona Lisa',
        'ans1': 'Leonardo De Vinci',
        'ans2': 'Vincent Van Gogh',
        'ans3': 'Pablo Picasso',
        'ans4': 'Salvador Dali',
        'correct': 'Leonardo De Vinci'
    },
    {
        'qst': 'Which planet is closest to the sun',
        'ans1': 'Mercury',
        'ans2': 'Venus',
        'ans3': 'Earth',
        'ans4': 'Jupiter',
        'correct': 'Mercury'
    },
    {
        'qst': 'What is the largest country in the world',
        'ans1': 'Algeria',
        'ans2': 'Russia',
        'ans3': 'China',
        'ans4': 'United States',
        'correct': 'Russia'
    },
    {
        'qst': 'How many minutes in a game of rugby league',
        'ans1': '60',
        'ans2': '90',
        'ans3': '130',
        'ans4': '80',
        'correct': '80'
    },
    {
        'qst': 'Name one landlocked country in Europe',
        'ans1': 'Hungary',
        'ans2': 'Germany',
        'ans3': 'French',
        'ans4': 'Netherlands',
        'correct': 'Hungary'
    },
    {
        'qst': 'What is the smallest country in the world',
        'ans1': 'Japan',
        'ans2': 'Poland',
        'ans3': 'Tunisia',
        'ans4': 'The Vatican',
        'correct': 'The Vatican'
    },
    {
        'qst': 'What is the capital of Iceland',
        'ans1': 'Helsinki',
        'ans2': 'Reykjavik',
        'ans3': 'Amsterdam',
        'ans4': 'London',
        'correct': 'Reykjavik'
    },
]


export default general.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))