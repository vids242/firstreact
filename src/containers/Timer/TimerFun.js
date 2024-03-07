import React, { useEffect, useState } from "react";

function TimerFun() {
    //1.
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {

        //3.componentDidMount //4.componentDidUpdate
        const timerRef = setInterval(tick, 1000);

        //5.componentWillUnmount
        return () => {
            clearInterval(timerRef);
        };
    }, []);


    //2.
    return (
        <div>
            <h2>Timer</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default TimerFun;