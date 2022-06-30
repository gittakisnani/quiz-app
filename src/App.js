import React, { useState } from 'react'
import LandingPage from "./pages/LandingPage";
import Loading from './pages/Loading';
import Qsts from './pages/Qsts';
import TypeQst from './pages/TypeQst'


function App() {
  const [name, setName] = useState(undefined)
  const [isLoading,setIsLoading] = useState(false)
  const [type, setType] = useState(undefined)
  const [isReady, setIsReady] = useState(false)
  const [score, setScore] = useState(0)


  const selectType = e => {
    setType(e.target.value || e.target.parentElement.value)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsReady(true)
    }, 850)
  }

  return (
    <main className="App">
        { !name && <LandingPage playerName={name} onChangeName={value => setName(value)}/> }
        { name && !isLoading && !type && <TypeQst playerName={name} selectType={selectType} /> }
        {name && isLoading && type && <Loading playerName={name} selectedType={type} setIsLoading={setIsLoading} />}
        { name && !isLoading && isReady && type && <Qsts selectedType={type} setScore={setScore} />}
    </main>
  );
}

export default App;
