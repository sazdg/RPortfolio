import React, { Component } from 'react';
import '../App.css';
import Button from "./Button.js";

class Form extends Component {

    render() { 
        return (
            <div className="Contact">
                <form action="get">
                    <p>Name</p>
                        <input type="text" name="name" required />
                    <p>Email</p>
                        <input type="email" name="email" required />
                    <p>Title</p>
                        <input type="text" name="title" required />
                    <p>Description</p>
                    <textarea name="description" required></textarea>
                    <p>
                        <Button />
                    </p>
                </form>
            </div>

        );
    }

}

export default Form;