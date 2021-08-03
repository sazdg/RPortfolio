import React, { Component } from 'react';
import '../App.css';

class Label extends Component {


    render() {
        return (
            <div className="Label">
                <p>{this.props.label}</p>
            </div>

        );
    }

}

export default Label;