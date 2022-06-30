const sports = [
    {
        'qst': 'Who was the top scorer in the 2019/20 Premier League season',
        'ans1': 'Mohammed Salah',
        'ans2': 'Jamie Vardy',
        'ans3': 'Harry Kane',
        'ans4': 'Son',
        'correct': 'Jamie Vardy'
    },
    {
        'qst': 'Jurgen Klopp began his manegeral career ayt which German club',
        'ans1': 'Mainz 05',
        'ans2': 'BVB 09',
        'ans3': 'Hamburg',
        'ans4': 'Bayern',
        'correct': 'Mainz 05'
    },
    {
        'qst': 'Which female tennis player has won the highest number of Grand Slams',
        'ans1': 'Serena williams',
        'ans2': 'Margaret Court',
        'ans3': 'Ons Jaber',
        'ans4': 'Sharapova',
        'correct': 'Margaret Court'
    },
    {
        'qst': 'Which footballer has scored the most goals in World Cup history',
        'ans1': 'Ronaldo R9',
        'ans2': 'Messi',
        'ans3': 'Cristiano Ronaldo',
        'ans4': 'Miroslav Klose',
        'correct': 'Miroslav Klose'
    },
    {
        'qst': 'In which year did Roger Federer win his first Wimbledon title',
        'ans1': '2003',
        'ans2': '2004',
        'ans3': '2005',
        'ans4': '2007',
        'correct': '2003'
    },
    {
        'qst': 'Who is the Premier League\'s all-time top scorer',
        'ans1': 'Wayne Rooney',
        'ans2': 'Cristiano Ronaldo',
        'ans3': 'Van Persie',
        'ans4': 'Alan Shearer',
        'correct': 'Alan Shearer'
    },
    {
        'qst': 'How many players win the 2018/19 Premier League Golden Boot',
        'ans1': 'Three',
        'ans2': 'One',
        'ans3': 'Two',
        'ans4': 'Four',
        'correct': 'Three'
    },
    {
        'qst': 'How many Olympic gold medals did rower Steve Redgrave win',
        'ans1': '3',
        'ans2': '7',
        'ans3': '5',
        'ans4': '4',
        'correct': '5'
    },
    {
        'qst': 'In American Football, how many points do you score for a touchdown',
        'ans1': '6',
        'ans2': '4',
        'ans3': '5',
        'ans4': '9',
        'correct': '6'
    },
    {
        'qst': 'The Chicago Cubs and Boston Red Sox play which sport',
        'ans1': 'Football',
        'ans2': 'Baseball',
        'ans3': 'Basketball (NBA)',
        'ans4': 'Handball',
        'correct': 'Baseball'
    },
]
export default sports.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))