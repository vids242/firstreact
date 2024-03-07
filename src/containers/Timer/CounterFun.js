import {useState,useEffect,React} from 'react';

function CounterFun() {
    const [count,setCounter] = useState(0)

    useEffect(() => {
        console.log("component mounted");
    },[])

    function updatecount() {
        setCounter(count+1)
    }
    

    return (
        <div>
            <h2>button clicked {count} times</h2>
            <button onClick={updatecount}>click</button>
            
        </div>
    );
}

export default CounterFun;