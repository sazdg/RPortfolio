import React, { Component } from 'react';
import '../App.css';


class ButtonTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
    };


    toggleVisible = () => {

        const scrolled = window.scrollY;
        //const scrolled = window.scrollY;

        if (scrolled >= 250) {
            this.setState({ visible: true })
        } else {
            this.setState({ visible: false })
        }
    };

    componentDidMount(){//aggiunta dell'evento, si riattiva se un valore cambia, ovvero lo scroll
        window.addEventListener('scroll', this.toggleVisible);
    };

    componentDidUpdate(){
        console.log("scroll X = " + window.scrollY);
    }

    componentWillUnmount(){//fine dell'evento
        window.removeEventListener('scroll', this.toggleVisible);
    }


    scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    };


    render() {
        return (
            <div className="ButtonUp">
                <button type="button" 
                style={{display: this.state.visible ? 'inline' : 'none', fontSize: '30px'}}
                onClick={this.scrollTop}>↑</button>
            </div>

        );
    }

}

export default ButtonTop;