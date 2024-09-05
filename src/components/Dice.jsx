import Die from "./Die";

export default function Dice({dice, color}) { //has an array of dice
    return (   
        <div className="dice" style={{border:`3px solid ${color}`}}>
            {dice.map((die, i) => {
                return (
                    <Die key={i} die={die}/>
                )     
            })}
        </div>

    )
}
