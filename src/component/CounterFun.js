import React, { useState } from 'react';
import '../CounterFun.css';

function CounterFun(props) {
    // const pbutton = <button>+</button>
    // const mbutton = <button>-</button>

    const [pcount, setPcount] = useState(0)


    const hendalplusbutton = () => {
        setPcount(pcount + 1)
    }

    const hendalminusbutton = () => {
        setPcount(pcount - 1)
    }

    const hendalRest = () => {
        setPcount(0)
    }

    return (
        <div id='main'>
            <h3>Counter</h3>
            <div id='disp' >
            
            <div class="indicator-design">
                <span id="indicator-quantity">{pcount}</span>
            </div>
            <div class="wrapper">
                <button class="plusButton" onClick={hendalplusbutton} disabled={pcount < 5 ? false : true}>+</button>
                <span class="num">{pcount}</span>
                <button class="minusButton" onClick={hendalminusbutton} disabled={pcount > 0 ? false : true}>-</button>
            </div>

            <div>
                <button id='button' onClick={hendalRest}>Reset</button>
            </div>

        </div>
        </div>
        



    );
}

export default CounterFun;