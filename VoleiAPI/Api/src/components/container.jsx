import '../App.css'
import { Link } from 'react-router-dom';
import Brasil from '../assets/Brasil.png'
import EstadosUnidos from '../assets/Estados Unidos.png'
import Franca from '../assets/França.png'
import Japao from '../assets/Japão.png'
import Polonia from '../assets/Polônia.png'
import RepublicaDominicana from '../assets/República Dominicana.png'
import Servia from '../assets/Sérvia.png'
import Turquia from '../assets/Turquia.png'

function Container() {
    return (
        <>
            <nav className="body">
                <div className="container">
                    <div className="">
                        <img className='img1' src={Brasil} alt="" />
                        <h1>Brasil</h1>
                        <Link className='linkJ' to="/brasil">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img2' src={EstadosUnidos} alt="" />
                        <h1>Estados Unidos</h1>
                        <Link className='linkJ' to="/estadosunidos">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img3' src={Franca} alt="" />
                        <h1>França</h1>
                        <Link className='linkJ' to="/franca">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img4' src={Japao} alt="" />
                        <h1>Japão</h1>
                        <Link className='linkJ' to="/japao">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img5' src={Polonia} alt="" />
                        <h1>Polônia</h1>
                        <Link className='linkJ' to="/polonia">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img6' id='imgEspecial' src={RepublicaDominicana} alt="" />
                        <h1>Republica Dominicana</h1>
                        <Link className='linkJ' to="/republicadominicana">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img7' src={Servia} alt="" />
                        <h1>Sérvia</h1>
                        <Link className='linkJ' to="/servia">Ver Seleção</Link>
                    </div>

                    <div className="">
                        <img className='img8' id='imgEspecial2' src={Turquia} alt="" />
                        <h1>Turquia</h1>
                        <Link className='linkJ' to="/turquia">Ver Seleção</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Container