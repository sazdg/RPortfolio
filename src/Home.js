import './App.css';
import React from 'react';
import Images from './components/Images.js';
import Title from './components/Title'
import snake from './assets/images/snake.jpg';
import theoffice from './assets/images/p2/homeOffice.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">

            <article className="App-article">
                <Title label={'HOME'} />
            </article>
            <article className="ImgHome">
                <Link className="ImgHome" to="/Linocut" >
                    <Images name={snake} />
                </Link>
                <Link className="ImgHome" to="/Illustrations" >
                    <Images name={theoffice}  />
                </Link>
            </article>


        </div>

    );
}

export default Home;
