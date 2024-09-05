import React from 'react';
import LuckyN from './LuckyN'

export default function Main({players, dice}) {
  let array = new Array(Number(players)).fill(0)
  const colors = ["Indigo","Blue","Green","Teal","Yellow","Purple","Olive","Magenta","Pink","Orange"]

  return (
    <>
    <div>
    {array.map((a, index) => {
        return (
            <div className='container'>
            <h1 style={{color:colors[index]}}>Player {index+1}</h1>
            <LuckyN numDice={dice} color={colors[index]} goal={7}/>
            </div>
            )
        })}
    </div>
    </>
  ) 
}

