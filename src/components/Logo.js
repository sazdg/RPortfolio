import React, { Component } from 'react';
import Nav from "./Nav.js";
import { Link } from 'react-router-dom';

class Logo extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.thick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID); 
    }

    thick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div className="App-logo">
                <Link to="/">
                    <span className="Logo" >
                        SAZDG {this.state.date.toLocaleTimeString()}
                    </span>
                </Link>
                <Nav />
            </div>
            
        );
    }

}

export default Logo;