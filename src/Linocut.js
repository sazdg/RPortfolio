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
                <span className="IMG1">
                    <Images name={snake} />
                </span>
                <Label label={'Snake, 2017'}/>

                <span className="IMG2">
                    <Images name={hopper} />
                </span>
                <Label label={'Hopper, 2020'} />
                
                <span className="IMG3">
                    <Images name={pattern} />
                </span>
                <Label label={'Pattern, 2020'} />
                
                <span className="IMG4">
                    <Images name={winter} />
                </span>
                <Label label={'Winter, 2021'} />

            </article>
        </div>
    );
}



export default Linocut;
