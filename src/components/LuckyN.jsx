import { useState } from "react";
import {getRolls, sum, allEquals} from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({numDice, goal=7, color="black"}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;
    function roll() {
        setDice(getRolls(numDice))
    }
    return (
            <div className="dice_container">
                <h1>{numDice} Dice Game 
                    <span style={{color:"red"}}>{isWinner && " WINNER Lucky 7"}</span>
                    <span style={{color:"red"}}>{allEquals(dice) && numDice>1 && " WINNER All Equal"}</span>
                </h1>
                <Dice dice={dice} color={color} />
                {/* <button onClick={roll}>ROLL</button> */}
                <Button clickFunc={roll} label="ROLL" />
            </div>
     
    )
}
