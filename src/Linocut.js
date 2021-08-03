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
                <span style={{ marginLeft: '40rem' }}>
                    <Images name={snake} size={'300'} />
                </span>
                <Label label={'Snake, 2017'} />

                <span style={{ marginLeft: '65rem' }}>
                    <Images name={hopper} size={'300'} />
                </span>
                <Label label={'Hopper, 2020'} />
                
                <span style={{ marginLeft: '15rem' }}>
                    <Images name={pattern} size={'300'} />
                </span>
                <Label label={'Pattern, 2020'} />
                
                <span style={{ marginLeft: '45rem' }}>
                    <Images name={winter} size={'300'} />
                </span>
                <Label label={'Winter, 2021'} />

            </article>
        </div>
    );
}



export default Linocut;
