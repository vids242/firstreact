import React, { Component } from 'react';

class Country extends Component {
    constructor(prop) {
        super(prop)

        this.state = {
            name: "india",
            timezone: "GMT +5:05"
        }
    }

    hendalbutton = () => {
        console.log("vraj");
        this.setState({
            name:"Usa",
            timezone:"GMT -5:05"
        })
    }

    render() {
        return (
            <>
                <h1>
                    Country
                </h1>
                <h3>Your Country Name Is : {this.state.name}</h3>
                <h4>Your TimeZone is : {this.state.timezone}</h4>

                <button onClick={this.hendalbutton}>Next Country</button>
            </>

        );
    }
}

export default Country;