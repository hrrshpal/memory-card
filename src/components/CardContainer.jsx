import React, {useEffect, useState} from 'react'
import Card from './Card'
import "../styles/CardContainer.css"

const CardContainer = () => {

    const [cardArray, setCardArray] = useState([])

   useEffect(()=>{
        async function getCards(){
            const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
            const data = await response.json()
            setCardArray(data.slice(0, 20));
            console.log("hi")
        }
        getCards()
   },[])

  return (
    <div>
        <div className='card-container'>
            {cardArray.map((card)=>{
                return (
                    <Card key={card.id} image={card.images.sm} name={card.name} powerstats={card.powerstats.power} />
                )
            })}
        </div>
    </div>
  )
}

export default CardContainer
