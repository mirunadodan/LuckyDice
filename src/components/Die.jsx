import dice1 from '/images/dice1.png';
import dice2 from '/images/dice2.png';
import dice3 from '/images/dice3.png';
import dice4 from '/images/dice4.png';
import dice5 from '/images/dice5.png';
import dice6 from '/images/dice6.png';

export default function Die({die}) {
    let src="";
    if (die===1) {
        src=dice1;
    } else if (die===2) {
        src=dice2;
    } else if (die===3) {
        src=dice3;
    } else if (die===4) {
        src=dice4;
    } else if (die===5) {
        src=dice5;
    } else src=dice6;

    return (
        <div>
            <img src={src}/>
        </div>
    )
}