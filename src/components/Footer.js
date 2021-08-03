import React, { Component } from 'react';
import '../App.css';

import instagram from "../assets/images/instagram-4-xl.png";
import facebook from "../assets/images/facebook-4-xl.png";
import Github from "../assets/images/linkedin-4-xxl.png";
import { Link } from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <div className="App-footer">
                <div className="Social">
                    <a href="https://www.instagram.com/sazdegra/"><img src={instagram} alt="Instagram" size={"30"} className="photo" /></a>
                    <a href="https://it-it.facebook.com"><img src={facebook} alt="Facebook" size={"30"} className="photo" /></a>
                    <a href="https://github.com/Sazdegra"><img src={Github} alt="GitHub" size={"30"} className="photo" /></a>
                </div>
                
                <p>
                    <Link to="/Contactform" 
                    style={{color: '#fff'}}>Contact Form</Link>
                </p>
                <p>Italy</p>
                <p>© 2021 Sara De Grandis</p>

            </div>

        );
    }

}

export default Footer;