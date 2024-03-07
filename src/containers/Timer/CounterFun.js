import {useState,useEffect,React} from 'react';

function CounterFun() {
    const [count,setCounter] = useState(0)
    const [data,setData] = useState("ram")
    useEffect(() => {
        console.log("component mounted");
    },[count])

    function updatecount() {
        setCounter(count+1)
    }
    function updateData () {
        setData("seeta")
    }

    return (
        <div>
            <h2>button clicked {count} times</h2>
            <button onClick={updatecount}>click</button>
            <button onClick={updateData}>update data</button>
        </div>
    );
}

export default CounterFun;