import React, { Component } from 'react';
import '../App.css';

class CallToAction extends Component {

    render() {
        return (
            <div className="CTA">
                <span>{this.props.label}</span>
            </div>

        );
    }

}

export default CallToAction;