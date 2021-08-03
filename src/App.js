import React from 'react';
import './App.css';
import Logo from './components/Logo.js';
import Footer from './components/Footer.js'

import Linocut from './Linocut.js';
import Illustrations from './Illustrations.js';
import Contactform from './Contactform';
import Home from './Home.js';
import {
 BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className="Head">
          <Logo />
        </div>
        

      <Switch>
          <Route path="/Home">
            <Home />
          </Route>

        <Route path="/Linocut">
          <Linocut />
        </Route>

        <Route path="/Illustrations">
          <Illustrations />
        </Route>

          <Route path="/Contactform">
            <Contactform />
          </Route>


      </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;