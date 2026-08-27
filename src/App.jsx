import { useState } from "react"
import Navbar from "./components/Navbar"
import CardContainer from "./components/CardContainer"

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <Navbar score={score} bestScore={bestScore} />
      <CardContainer score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore} />
    </>
  )
}

export default App
