import React, { Component } from 'react';

class City extends Component {
    constructor(prop) {
        super(prop)

        this.state = {
            name: "Surat",
            population: "2.8M"
        }
    }

    hendalbutton = () => {
        console.log("vraj");
        this.setState({
            name: "Rajkot",
            population: "1.5M"
        })
    }

    render() {
        return (
            <>
                <h1>
                    City
                </h1>
                <h3>Your City Name Is : {this.state.name}</h3>
                <h4>Your City Population Is : {this.state.population}</h4>

                <button onClick={this.hendalbutton}>Next City</button>
            </>

        );
    }
}

export default City;