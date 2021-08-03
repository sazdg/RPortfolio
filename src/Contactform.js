import './App.css';
import React from 'react';
import Form from './components/Form.js';
import CTA from './components/CallToAction.js';

function Contactform() {
    return (
        <div className="App">
            <article>
                <CTA label="CONTACT FORM" className="Cta"/>
                <Form />
            </article>
        </div>

    );
}

export default Contactform;
