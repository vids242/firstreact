import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../Redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();

    const hendalInc = () => {
        dispatch(increment())
    }
    const hendalDic = () => {
        
    }

    return (
        <div>
            <button onClick={hendalInc}>+</button>
            {0}
            <button onClick={hendalDic}>-</button>
        </div>
    );
}

export default Counter;