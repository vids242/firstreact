import React, { Component } from 'react';

class Time extends Component {

    //1.It is used to initalize stat value or binding method
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }


    //3.It is called after mounting.It is mostly used to get data from server .Is is called only one time when first time  componet mount
    componentDidMount = () => {
        // console.log("3,componentDidMount");
        this.timeRef = setInterval(this.tick, 1000)
    }


    //4. Is is called when stat or props value changed.
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState) {
            // console.log("4,componentDidUpdate");
        }
    }


    //5. Is is used realse occupid resources when we move to another component
    componentWillUnmount = () => {
        clearInterval(this.timeRef)
    }


    //2.It is used display jsx in DOM.It is called when any stat or props are changed
    render() {
        return (
            <div>
                <h2>Time</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;