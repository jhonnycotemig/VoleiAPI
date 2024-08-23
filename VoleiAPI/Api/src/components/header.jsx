import '../App.css'
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

function Header() {
    return (
        <>
            <header>
                <Link className='logo' to="/home"><img src={Logo} alt="" /></Link>

                <h1>Seleções
                    <ul>
                        <Link to="/franca" className='link'>
                            <li><span>França</span></li>
                        </Link>
                        <Link to="/republicadominicana" className='link'>
                            <li><span>República Dominicana</span></li>
                        </Link>
                        <Link to="/servia" className='link'>
                            <li><span>Sérvia</span></li>
                        </Link>
                        <Link to="/turquia" className='link'>
                            <li><span>Turquia</span></li>
                        </Link>
                        <Link to="/brasil" className='link'>
                            <li><span>Brasil</span></li>
                        </Link>
                        <Link to="/estadosunidos" className='link'>
                            <li><span>Estados Unidos</span></li>
                        </Link>
                        <Link to="/japao" className='link'>
                            <li><span>Japão</span></li>
                        </Link>
                        <Link to="/polonia" className='link'>
                            <li><span>Polônia</span></li>
                        </Link>
                    </ul>
                </h1>
            </header>
        </>
    )
}

export default Header