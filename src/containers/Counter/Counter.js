import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dicrement, increment } from '../../Redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counterVal  = useSelector(state => state.counter)

    const hendalInc = () => {
        dispatch(increment())
    }
    const hendalDic = () => {
        dispatch(dicrement())
    }
    // console.log(counterVal);
    return (
        <div>
            <button onClick={hendalInc}>+</button>
            {counterVal.count}
            
            <button onClick={hendalDic}>-</button>
        </div>
    );
}

export default Counter;