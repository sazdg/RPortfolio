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
            <div className="Image">
                <img src={this.props.name} width={this.props.size} alt={this.props.name} />
            </div>

        );
    }

}

export default Images;