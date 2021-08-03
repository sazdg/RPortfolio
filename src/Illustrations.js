import './App.css';
import Images from './components/Images.js';
import Title from './components/Title.js';
import Label from './components/Label.js';
import theoffice from './assets/images/p2/theOffice1.png';
import parks1 from './assets/images/p2/P&R_1.1.png';
import parks2 from './assets/images/p2/P&R_2.jpg';
import parks4 from './assets/images/p2/p&r_4.jpg';
import parks5 from './assets/images/p2/P&R_5.png';


function Illustrations() {
    return (
        <div className="App">
            <article className="App-article">
                <Title label={'QUOTES'} />
            </article>
            <article className="Img">
                <Images name={theoffice} size={'400'} />
                <Label label={'The Office 1'} />
                <Images name={parks1} size={'400'} />
                <Label label={'Parks and Recreation 1'} />
                <Images name={parks2} size={'400'} />
                <Label label={'Parks and Recreation 2'} />
                <Images name={parks4} size={'400'} />
                <Label label={'Parks and Recreation 4'} />
                <Images name={parks5} size={'400'} />
                <Label label={'Parks and Recreation 5'} />
            </article>
          
        </div>
    );
}

export default Illustrations;
