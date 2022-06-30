import React from 'react'
import { useCategories } from '../contexts/QuestionsContext'


const TypeQst = ({ playerName, selectType }) => {
  const categories = useCategories()
  return (
    <div className='qst-type'>
      <p className="welcome-text-name">
        <span className="emoji">🖐</span>
        Hey, {playerName === 'Guest' ? 'Dear' : playerName}
      </p>
      <p className='qst'>
        What do you want to Improve?
      </p>
      <ul className='categories'>
        {categories.map((cat, index) => (
          <li 
          key={index}
          className='cat-li'
          >
            <div className='icons'>
              <img className='type-icon' src={`./assets/${cat.toLowerCase().replace(' ', '-')}.svg`} alt='Icon' />
              <button 
              className='start-type'
              onClick={selectType}
              value={cat}
              >
                <img 
                className='play-circle' src='./assets/play-circle.svg' 
                alt='Start Quiz' 
                title='Start Quiz'
                />
              </button>
            </div>
            <p className='cat-name'>{cat}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TypeQst