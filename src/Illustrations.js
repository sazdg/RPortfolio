import './App.css';
import Images from './components/Images.js';
import Title from './components/Title.js';
import theoffice from './assets/images/p2/theOffice1.jpg';
import parks1 from './assets/images/p2/P&R_1.1.jpg';
import parks2 from './assets/images/p2/P&R_2.jpg';
import parks4 from './assets/images/p2/p&r_4.jpg';
import parks5 from './assets/images/p2/P&R_5.jpg';


function Illustrations() {
    return (
        <div className="App">
            <article className="App-article">
                <Title label={'QUOTES'} />
            </article>
            <article className="Ill">
                <div className="Ill1">
                    <Images name={theoffice} />
                </div>

                <div className="Ill2">
                    <Images name={parks1} />
                </div>

                <div className="Ill3">
                    <Images name={parks2} />
                </div>

                <div className="Ill4">
                    <Images name={parks4} />
                </div>

                <div className="Ill5">
                    <Images name={parks5} />
                </div>
            </article>
          
        </div>
    );
}

export default Illustrations;
