import React, { Component } from 'react';
import '../App.css';
import Images from "./Images.js";

class Label extends Component {


    render() {
        return (
            <div className="Image">
                <Images />
                <p>{this.props.label}</p>
            </div>

        );
    }

}

export default Label;