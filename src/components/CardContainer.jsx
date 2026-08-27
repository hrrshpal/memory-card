import React, {useEffect, useState} from 'react'
import Card from './Card'
import "../styles/CardContainer.css"

const CardContainer = ({score,bestScore, setScore, setBestScore}) => {

    const [cardArray, setCardArray] = useState([])
    const [clickedCards, setClickedCards] = useState([])

   useEffect(()=>{
        async function getCards(){
            const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
            const data = await response.json()
            setCardArray(data.slice(0, 21));
        }
        getCards()
   },[])

  return (
    <div>
        <div className='card-container'>
            {cardArray.map((card)=>{
                return (
                    <Card key={card.id} image={card.images.sm} name={card.name} clickedCards={clickedCards} setClickedCards={setClickedCards} cardArray={cardArray} setCardArray={setCardArray} powerstats={card.powerstats.power} score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore} />
                )
            })}
        </div>
    </div>
  )
}

export default CardContainer
