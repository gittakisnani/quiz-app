import { useRef } from "react"
const LandingPage = ({ onChangeName }) => {
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeName(ref.current.value || 'Guest')
  }

  return (
     <div className="landing-page">
        <img className="quiz-img" src="./assets/undraw_mathematics_-4-otb.svg" alt="Quiz Undraw svg icon" />
        <div className="flex-grow">
        <p className="welcome-text">
        <span className="emoji">🖐</span>
        Hey, Welcome to <br />
        <span className="taki-quiz">TAKI'S QUIZ GAME</span>
        </p>
        <div className="name-form-wrapper">
            <form
            className="name-form" 
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <label htmlFor="player-name">Enter your name please: </label>
                <input 
                ref={ref}
                type="text" 
                className="name-input"  
                placeholder="Player name..." 
                spellCheck="false"
                autoComplete="off"
                />
                <button className="start-btn">Get Started</button>
            </form>
        </div>
        </div>
            <div className="taki-footer">
                <p>Developed by <a href="https://google.com">Taki Snani</a> 🧑🏽‍💻</p>
            </div>
            <button 
            type="button" 
            className="skip"
            onClick={handleSubmit}
            >Skip</button>
        
    </div>
  )
}


export default LandingPage