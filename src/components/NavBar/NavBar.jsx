import logo from '../../assets/Imagenes/infoMarvelLogo.png'
import menuBar from '../../assets/Imagenes/MenuBar.png'
import { NavLink } from 'react-router-dom'
import "./navBar.css"



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbarColor">
            <div className="container-fluid">

                <NavLink to='/' className="navbar-brand"><img src={logo} alt="Logo" id='logo' /></NavLink>
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon menuBar"><img src={menuBar} alt="Menu Bar" id='menuBar' /></span>
                </button>

                <div className="collapse navbar-collapse barraNav" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link estilos">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/comics' className="nav-link estilos">Comics</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/series'  className="nav-link estilos">Series</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/characters'  className="nav-link estilos">Characters</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar