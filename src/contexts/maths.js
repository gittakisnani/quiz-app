const mathematics = [
    {
        'qst': 'What is the Next Prime Number after 7',
        'ans1': '13',
        'ans2': '12',
        'ans3': '14',
        'ans4': '11',
        'correct': '11'
    },
    {
        'qst': 'What is 6% Equals to',
        'ans1': '0.06',
        'ans2': '0.6',
        'ans3': '0.006',
        'ans4': '0.0006',
        'correct': '0.06'
    },
    {
        'qst': 'How Many Years are there in a Decade',
        'ans1': '5 years',
        'ans2': '10 years',
        'ans3': '15 years',
        'ans4': '20 years',
        'correct': '10 years'
    },
    {
        'qst': 'How Many Months Make a Century',
        'ans1': '2 months',
        'ans2': '4 months',
        'ans3': '11 months',
        'ans4': '12 months',
        'correct': '4 months'
    },
    {
        'qst': 'How Many Months Have 120 Days',
        'ans1': '13',
        'ans2': '12',
        'ans3': '14',
        'ans4': '11',
        'correct': '11'
    },
    {
        'qst': 'How Many Sides are there in a Decagon',
        'ans1': '7',
        'ans2': '8',
        'ans3': '9',
        'ans4': '10',
        'correct': '10'
    },
    {
        'qst': '27 is a perfect cube. If true then what is the perfect cube of 27',
        'ans1': '9',
        'ans2': '6',
        'ans3': '3',
        'ans4': '27 is not a perfect cube',
        'correct': '3'
    },
    {
        'qst': 'If Kara earns $80 in 8 hours, how many hours will it take her to earn $500',
        'ans1': '500 hours',
        'ans2': '50 hours',
        'ans3': '250 hours',
        'ans4': '40 hours',
        'correct': '50 hours'
    },
    {
        'qst': 'If a 26.2 mile run is divided into 6 equal parts, how long is each part',
        'ans1': '2.63',
        'ans2': '4.37',
        'ans3': '7.43',
        'ans4': '3.47',
        'correct': '4.37'
    },
    {
        'qst': 'How fast do I have to drive to go 20 miles in 40 minutes',
        'ans1': '40 miles per hour',
        'ans2': '50 miles per hour',
        'ans3': '30 miles per hour',
        'ans4': '20 miles per hour',
        'correct': '30 miles per hour'
    },
]
export default mathematics.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))