import React, { useState } from 'react';
import '../App.css';

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
        <div>
            <h3>Counter</h3>
            <p>
                <button onClick={hendalRest}>Reset</button>
                <button onClick={hendalplusbutton} disabled={pcount < 5? false : true}>+</button>
                {pcount}
                <button onClick={hendalminusbutton}disabled={pcount > 0? false : true}>-</button>
            </p>
        </div>
    );
}

export default CounterFun;