const medical = [
    {
        'qst': 'Two significant alterations in bowel sounds',
        'ans1': 'Decreased and increased bowel sounds',
        'ans2': 'Loud and quiet bowel sounds',
        'ans3': 'Fetid and scentless bowel sounds',
        'ans4': 'Noisy and loud bowel sounds',
        'correct': 'Decreased and increased bowel sounds'
    },
    {
        'qst': 'Indicative of acute or chronic respiratory distress',
        'ans1': 'Height',
        'ans2': 'Posture',
        'ans3': 'Weight',
        'ans4': 'Hair loss',
        'correct': 'Posture'
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
        'qst': 'Lateral spinal curvature',
        'ans1': 'Lateral spinal curvature',
        'ans2': 'Kyphosis',
        'ans3': 'Lordosis',
        'ans4': 'Scoliosis',
        'correct': 'Scoliosis'
    },
    {
        'qst': 'Where is S1 auscultated most clearly',
        'ans1': 'Apex of the heart',
        'ans2': 'Base of heart',
        'ans3': 'Around the heart',
        'ans4': 'All over the heart',
        'correct': 'Apex of the heart'
    },
    {
        'qst': 'Standardized objective measurement of the level of consciousness',
        'ans1': 'PERRLA',
        'ans2': 'Glasgow Coma Scale',
        'ans3': 'Rhomberg Test',
        'ans4': 'Motor function assessmen',
        'correct': 'Glasgow Coma Scale'
    },
    {
        'qst': 'Which of the following is not a peripheral pulse',
        'ans1': 'Ulnar',
        'ans2': 'Femoral',
        'ans3': 'Brachial',
        'ans4': 'Humoral',
        'correct': 'Humoral'
    },
    {
        'qst': 'Cramp-like pain in the lower extremities usually after walking',
        'ans1': 'Ischemia',
        'ans2': 'Claudication',
        'ans3': 'Hypoventilation',
        'ans4': 'Atelactesis',
        'correct': 'Claudication'
    },
    {
        'qst': 'Which of the following is not a symptom',
        'ans1': 'Soreness',
        'ans2': 'Pruritus',
        'ans3': 'Flatus',
        'ans4': 'Pain',
        'correct': 'Flatus'
    },
    {
        'qst': 'Exaggeration of the posterior curvature of the thoracic spine',
        'ans1': 'Spina Bifida',
        'ans2': 'Kyphosis',
        'ans3': 'Lordosis',
        'ans4': 'Scoliosis',
        'correct': 'Kyphosis'
    },
]
export default medical.map(({ qst, ans1, ans2, ans4, ans3, correct }) => ({ qst, correct, answers: [ans1, ans2, ans3, ans4]  }))