import React, { useRef } from 'react'

const Loading = ({ playerName, selectedType, setIsLoading }) => {
    const ref = useRef()
    setTimeout(() => ref.current.classList.add('start'), 0)
  return (
    <div className='loading-page'>
        <div>
            <p> 
            Please Wait {playerName} 😊, <br />
            We're loading {selectedType} questions
            </p>
            <div className='progress'>
                <span ref={ref}></span>
            </div>
        </div>
    </div>
  )
}

export default Loading