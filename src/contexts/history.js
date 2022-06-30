const history = [
    {
        'qst': 'In which year did India get independence from Britain',
        'ans1': '1944',
        'ans2': '1945',
        'ans3': '1946',
        'ans4': '1947',
        'correct': '1947'
    },
    {
        'qst': 'The ancient Egyptians used to sleep on pillows made of',
        'ans1': 'Stones',
        'ans2': 'Gold',
        'ans3': 'Cotton',
        'ans4': 'Iron',
        'correct': 'Stones'
    },
    {
        'qst': 'World War I began in which year',
        'ans1': '1923',
        'ans2': '1938',
        'ans3': '1917',
        'ans4': '1914',
        'correct': '1914'
    },
    {
        'qst': 'Adolf Hitler was born in which country',
        'ans1': 'France',
        'ans2': 'Germany',
        'ans3': 'Austria',
        'ans4': 'French',
        'correct': 'Austria'
    },
    {
        'qst': 'Where was John F. Kennedy assassinated in',
        'ans1': 'New York',
        'ans2': 'Austin',
        'ans3': 'Dallas',
        'ans4': 'Miami',
        'correct': 'Dallas'
    },
    {
        'qst': 'Who fought in the war of 1812',
        'ans1': 'Andrew Jackson',
        'ans2': 'Arthur Wellesley',
        'ans3': 'Otto von Bismarck',
        'ans4': 'Napoleon',
        'correct': 'Andrew Jackson'
    },
    {
        'qst': 'Which general famously stated, \'I shall return\'',
        'ans1': 'Bull Halsey',
        'ans2': 'George Patton',
        'ans3': 'Douglas MacArthur',
        'ans4': 'Omar Bradley',
        'correct': 'Douglas MacArthur'
    },
    {
        'qst': 'American involvement in the Korean War took place in which decade',
        'ans1': '1970s',
        'ans2': '1950s',
        'ans3': '1920s',
        'ans4': '1960s',
        'correct': '1950s'
    },
    {
        'qst': 'The Battle of Hastings in 1066 was fought in which country',
        'ans1': 'France',
        'ans2': 'Russia',
        'ans3': 'England',
        'ans4': 'Norway',
        'correct': 'England'
    },
    {
        'qst': 'The Magna Carta was published by the King of which country',
        'ans1': 'France',
        'ans2': 'Austria',
        'ans3': 'Italy',
        'ans4': 'England',
        'correct': 'England'
    },
]

export default history.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))