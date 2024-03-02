import React, { useState } from 'react';


function CountryFun(props) {
    //hook - useState  - state functionality in function based component. 

    const [name, setName] = useState("india")
    const [timezone, setTimeZone] = useState("GMT+5:30")

    const hendalbutton = () => {
        setName("USA")
        setTimeZone("GMT-5:00")
    }
    return (
        <div>
            <h1>Function Base Components</h1>
            <h3>Your Country Name Is : {name}</h3>
            <h4>Your TimeZone is : {timezone}</h4>

            <button onClick={hendalbutton}>Next Country</button>
        </div>
    );
}

export default CountryFun;