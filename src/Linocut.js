import './App.css';
import './Illustrations.js';
import Title from './components/Title.js';
import Images from './components/Images.js';
import Label from './components/Label.js';

import snake from './assets/images/snake.jpg';
import hopper from './assets/images/hopper.jpg';
import pattern from './assets/images/pattern.jpg';
import winter from './assets/images/winter.jpg';


function Linocut() {
    return (
        <div className="App">

            <article className="App-article">
                <Title label={'PORTFOLIO'} />
            </article>
            <article className="Img">
                <Images name={snake} size={'400'} />
                <Label label={'Snake, Dicember 2017'} />
                <Images name={hopper} size={'400'} />
                <Label label={'Hopper, Dicember 2020'} />
                <Images name={pattern} size={'400'} />
                <Label label={'Pattern, Dicember 2020'} />
                <Images name={winter} size={'400'} />
                <Label label={'Winter, January 2021'} />
            </article>
        </div>
    );
}



export default Linocut;
