import { useState } from 'react'
import './App.css';
import Main from './components/Main'


function App() {
  const [players, setPlayers] = useState(1);
  const [dice, setDice] = useState(1)
  const [main, setMain] = useState(false)
  const handlePlayers = (event) => {
    setPlayers(event.target.value)
    setMain(false)
  }
  const handleDice = (event) => {
    setDice(event.target.value);
    setMain(false)
  }
  const roll = () => {
   setMain(true)
  }
  return (
   <>
    <div className="main">
      <div className="main_nav">
        <h1># players: </h1> 
        <input type="text" onChange={handlePlayers} value={players}/>
      </div>
      <div className="main_nav">
        <h1># dice: </h1> 
        <input type="text" onChange={handleDice} value={dice}/>
      </div>
      <button onClick={roll} className='main_btn'>ROLL</button>
    </div>

    {main ? <Main players={players} dice={dice}/> : null }
   </>
  )
}

export default App
