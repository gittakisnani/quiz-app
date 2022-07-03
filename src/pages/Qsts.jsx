import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react'
import axios from 'axios'
import { useData } from '../contexts/QuestionsContext'

let quotes = []
const getRandomQuote = async () => {
  const response = await axios.get('https://type.fit/api/quotes')
  quotes = response.data.slice(0, 100)
}

getRandomQuote()
//create a function that set a 13secs to load the next question
//a 10 secs for the answer and three secs for showing the correct answer
//when we answer => we wait 3 secs to load the next question
//if we don't answer and the 10 secs complete => we disable the radios and show the correct answer other wise when we click on radio buttons we show the correct answer and color it by green and color rd for the wrong answer
//when we load the 10th question, the next page after 13 secs should be the score page
//create a function that waits 13secs for each qst and load the next and when we submit the answer we call this function
//create a function that colors the wrong answer with red and the correct one with green when we submit => answered is true and if not answered only the correct answer colors by green and show message that you must answer the question
//create function that reset the radios and disable them every each answer 
//create a function that enable radios on each load
//create a function that shows correct or wrong or msg



const Qsts = ({ selectedType, setScore, setIsReady }) => {
  const timeRef = useRef()
  const correctRef = useRef()
  const wrongRef = useRef()
  const formRef = useRef()
  const questions = useData()[selectedType.toLowerCase()]
  const [current, setCurrent] = useState(1)
  const [quote, ] = useState(quotes[Math.floor(Math.random() * quotes.length)])
  const [nextQst, setNextQst] = useState(undefined)
  const [startTimeBar, setStartTimeBar] = useState(undefined)
  const [fullTimeBar, setFullTimeBar] = useState(undefined)
  const [handleCheckTO, setHandleCheckTO] = useState(undefined)


  const resetAll = (selector, className) => {
    [...document.querySelectorAll(selector)].forEach(label => label.classList.remove(className))
    wrongRef.current.classList.add('hide')
    correctRef.current.classList.add('hide')
  }

  const handleTimeBar = () => {
    clearTimeout(startTimeBar)
    clearTimeout(fullTimeBar)
    const timeBar = document.querySelector('.time-bar span')
    timeBar.classList.remove('start-time')
    timeBar.classList.remove('full-time')
    setStartTimeBar(setTimeout(() => timeBar.classList.add('start-time'), 10))
    setFullTimeBar(setTimeout(() => timeBar.classList.add('full-time'), 10000))
  }
  const loadNextQuestion = () => {
    clearTimeout(nextQst)
    clearTimeout(handleCheckTO)
    resetAll('label', 'green')
    resetAll('label', 'red')
    resetAll('span', 'checked')
    resetAll('span', 'disabled')
    setHandleCheckTO(setTimeout((e) => handleCheck(e), 10000))
  }

  const showMsg = (checked = null, correct) => {
    [correctRef.current, wrongRef.current].forEach(item => !item.classList.contains('hide') ? item.classList.add('hide') : '' )

    if(!checked) {
      wrongRef.current.classList.remove('hide')
      return;
    }

    if(checked.textContent === correct) {
      correctRef.current.classList.remove('hide')
      setScore(prev => prev + 1)
    } else {
      wrongRef.current.classList.remove('hide')
    }
  }

  const handleCorrection = (correct = questions[current - 1].correct) => {
    const correctLabel = [...document.querySelectorAll('label')].filter(label => label.textContent === correct)[0]
    const checked = document.querySelector('.checked + label') || null

    correctLabel.classList.add('green')
    if(checked) checked.classList.add(checked.textContent === correct ? 'green' : 'red')


    showMsg(checked, correct)
  }

  
  const handleCheck = (e) => {
    if(e && e.target) {
      [...document.querySelectorAll('.checkmark')].forEach(checkmark => checkmark.classList.remove('checked'));
      [...document.querySelectorAll('.checkmark')].forEach(checkmark => checkmark.classList.add('disabled'));
      e.target.classList.remove('disabled')
      e.target.classList.add('checked')
    }

    clearTimeout(nextQst)
    setNextQst(setTimeout(() => setCurrent(prev => prev + 1), 3000))

    handleCorrection()
  }

  useEffect(() => { 
    if(current >= 11) {
      setIsReady(false)
      return;
    }

    handleTimeBar()
    loadNextQuestion()
  }, [current, setCurrent])

  return (
     <div className='qst-page'>
        {current <= 10 && 
          <>
        <header className='header'>
          <p className='type'>{selectedType}</p>
        </header>

        <div className='time-number'>
          <div className='number'>
            <p>{current}/10</p>
          </div>
          <div className='time-bar'>
            <span className='' ref={timeRef}></span>
          </div>
        </div>

        <div className='qsts'>
          <h3 className='question'>
            Q{current}. {questions[current - 1].qst || 'Something wrong in index ' + current} ?
          </h3>

          <div className='answers'>
            <form ref={formRef}>
              {questions[current - 1].answers.map((answer, index) => (
                <div 
                key={index}
                className='box'
                >
                  <span 
                  className='checkmark'
                  onClick={handleCheck}
                  >
                  </span>
                  <label 
                  htmlFor={`${index}`}
                  >{answer}</label>
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
              <p className='author'>{quote.author ?? 'Unknown authorgit'}</p>
            </div>
            </>  
            }
    </div>
  )
}

export default Qsts