import React, { Component } from 'react';
import '../App.css';

class Title extends Component {

    render() {
        return (
            <div className="Titolo">
                <span>{this.props.label}</span>
            </div>

        );
    }

}

export default Title;