import { useState } from "react"
import Navbar from "./components/Navbar"
import CardContainer from "./components/CardContainer"

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <Navbar/>
      <CardContainer />
    </>
  )
}

export default App
