import React from 'react'

const tweetLink = 'https://twitter.com/intent/tweet?text'

const Score = ({ name, score, type, setType, setIsLoading }) => {
    const giveRemark = (score) => {
        if (score <= 3) return 'NOT AS GOOG AS WELL'
        if (score <= 6) return 'NOT TOO BAD '
        if (score <= 7) return 'DOING WELL'
        if (score <= 9) return 'VERY GOOD'
        if (score === 10) return 'EXCELLENT'
    }

    const restart = () => {
        setType(undefined)
        setIsLoading(false)
    }

    const msg = `I got ${score} out of 10 in TAKI'S QUIZ GAME, Can you beat me?
    https://gittakisnani.github.io/quiz-app/
    `



    return (
      <div className='score-page'>
          Hey again {name === 'Guest' ? 'Dear' : name}, thanks for trying our game, Hope you've enjoyed it! <br />
          <p>Your Score is: <span className='score'>{score}/10</span></p>
          <p>You're <span>{giveRemark(score)}</span> at *{type}*</p>
          <button 
          className='restart'
          onClick={restart}
          >Restart
          </button>
          <a type='button' href={encodeURI(`https://twitter.com/intent/tweet?text=${msg}`)}>
            <img src="./assets/twitter.svg" alt="Share score to twitter" />
          </a>
      </div> 
  )
}

export default Score