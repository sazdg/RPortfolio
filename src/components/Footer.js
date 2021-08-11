import React, { Component } from 'react';
import '../App.css';

import instagram from "../assets/icons/instagram-4-xl.png";
import pinterest from "../assets/icons/iconmonstr-pinterest-1-64.png";
import Github from "../assets/icons/GitHub-Mark-Light-64px.png";
import { Link } from 'react-router-dom';
class Footer extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="App-footer">
                <div className="Social">
                    <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" size={"30"} className="photo" /></a>
                    <a href="https://www.pinterest.it/"><img src={pinterest} alt="Facebook" size={"30"} className="photo" /></a>
                    <a href="https://github.com/sazdg"><img src={Github} alt="GitHub" size={"30"} className="photo" /></a>
                </div>
                
                <p>
                    <Link to="/Contactform"
                    style={{color: '#fff', textDecoration: 'underline'}}>
                    Contact Form</Link>
                </p>

                <p>Italy</p>
                <p>© 2021 Sara De Grandis</p>

            </div>

        );
    }

}

export default Footer;