import Box from "./Box";
import { useState } from "react";

export default function BoxGrid({numboxes = 9}) {
    const [boxes, setBoxes] = useState(new Array(numboxes).fill(false))
    const toggle = (index) => {
        setBoxes((oldBoxes) => {
           return oldBoxes.map((value, i) => {
                if (i === index) {
                return !value
                } else return value;
            })
       })
    }
    function reset() {
        setBoxes(new Array(numboxes).fill(false))
    }
     return (
        <div className="BoxGrid">
            {boxes.map((value, index) => {
              return  <Box key={index} isActive={value} toggle={() => toggle(index)}/>
            })}
            <button onClick={reset}>Reset</button>
        </div>
     )

}