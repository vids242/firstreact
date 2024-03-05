import React, { Component } from 'react';
import style from  "./Card.module.css"

class Dcard extends Component {
    render() {
        return (
            
                <div className={style.card}>
                    <h3 className={style.title}>{this.props.Ddata.name}</h3>
                    <span className={style.digree}>{this.props.Ddata.degrees}</span>
                    <p>{this.props.Ddata.details}</p>
                </div>
            
        );
    }
}

export default Dcard;