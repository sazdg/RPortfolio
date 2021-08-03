import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <div className="barraNav">
                <span>
                    <ul className="noToggle">
                        <li className="nav-link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/Linocut">Linocut</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/Illustrations">Quotes</Link>
                        </li>
                    </ul>
                </span>
            </div>



        );
    }

}

export default Nav;