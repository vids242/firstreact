import React, { useState } from 'react';

function CityFun(props) {
    const [name, setName] = useState("Surat")
    const [population, setPopulation] = useState("288.9M")

    const hendalbutton = () => {
        setName("Vadodra");
        setPopulation("198.5M")
    }

    return (
        <div>
             <h1>Function Base Components</h1>
            <h3>Your City Name Is : {name}</h3>
            <h4>Your City Population Is : {population}</h4>

            <button onClick={hendalbutton}>Next City</button>
        </div>
    );
}

export default CityFun;