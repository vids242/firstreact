import React, { useEffect, useState } from "react";

function TimerFun() {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const timerRef = setInterval(tick, 1000);

        return () => {
            clearInterval(timerRef);
        };
    }, []);

    return (
        <div>
            <h2>Timer</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
};

export default TimerFun;