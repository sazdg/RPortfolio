import React, { Component } from 'react';
import '../App.css';

class Images extends Component {
    constructor(props){
        super(props);
        this.state = {
            img:this.props.name
        }
    }

    render() {
        return (
            <div className="DivImages">
                <img src={this.props.name} alt={this.props.alt} />
            </div>

        );
    }

}

export default Images;