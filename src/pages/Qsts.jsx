import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useData } from '../contexts/QuestionsContext'

let quotes = []
const getRandomQuote = async () => {
  const response = await axios.get('https://type.fit/api/quotes')
  quotes = response.data.slice(0, 100)
  console.log(quotes)
}

getRandomQuote()



const Qsts = ({ selectedType, setScore }) => {
  const timeRef = useRef()
  const correctRef = useRef()
  const wrongRef = useRef()
  const formRef = useRef()
  const questions = useData()[selectedType.toLowerCase()]
  const [current, setCurrent] = useState(1)
  const [timeOut, setTimeOut] = useState(undefined)
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])
  useEffect(() => {
    console.log(`new qst`)
    timeRef.current.classList.remove('start-time');
    setTimeout(() => timeRef.current.classList.add('start-time'), 10);
    setTimeOut(setTimeout(() => setCurrent(prev => prev !== 10 ? prev + 1 : prev), 10000))
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [current, setCurrent])

  const toggleAttribute = () => {
    [...formRef.current.querySelectorAll('input')].forEach(input =>
      input.hasAttribute('disabled') ? input.removeAttribute('disabled') : input.setAttribute('disabled', ''))
  }

  useEffect(() => toggleAttribute(), [current])
  
  const handleAnswer = (e, correct) => {
    if(e.target.value === correct) {
      correctRef.current.classList.remove('hide')
      setScore(prevScore => prevScore + 1)
      setTimeout(() => correctRef.current.classList.add('hide'), 2000)
    } else {
      wrongRef.current.classList.remove('hide')
      setTimeout(() => wrongRef.current.classList.add('hide'), 2000)
    }

    clearTimeout(timeOut)
    setTimeout(() => setCurrent(prev => prev !== 10 ? prev + 1 : prev), 2500)

    toggleAttribute()
  }

  return (
    <div className='qst-page'>
        <header className='header'>
          <button>{'<'}</button>
          <p className='type'>{selectedType}</p>
          <button>Sound</button>
        </header>

        <div className='time-number'>
          <div className='number'>
            <p>{current}/10</p>
          </div>
          <div className='time-bar'>
            <span className='start-time' ref={timeRef}></span>
          </div>
        </div>

        <div className='qsts'>
          <h3 className='question'>
            Q{current}. {questions[current - 1].qst} ?
          </h3>

          <div className='answers'>
            <form ref={formRef}>
              {questions[current - 1].answers.map((answer, index) => (
                <div 
                key={index}
                className='box'

                >
                  <input 
                  type="radio" 
                  name='answers' 
                  id={index}
                  value={answer}
                  onChange={(e) => handleAnswer(e, questions[current - 1].correct)}
                  disabled
                  />

                  <label htmlFor={`${index}`}>{answer}</label>
                </div>
              ))}
            </form>
          </div>
            <span className='correct hide' ref={correctRef}>
            <img src="./assets/correct.svg" alt="Correct" />
              Correct answer
            </span>
            <span className='wrong hide' ref={wrongRef}>
            <img src="./assets/wrong.svg" alt="wrong" />
              Wrong answer
            </span>
        </div>
            <div className='quote'>
              <p className='text'>"{quote.text}"</p>
              <p className='author'>{quote.author ?? 'Unknown author'}</p>
            </div>
    </div>
  )
}

export default Qsts