import { NavLink } from 'react-router-dom'
import "./navBar.css"



const NavBar = () => {
    return (
        <div className="header">  
            <nav className="navbar">
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to='/' classNameName="nav-link estilos"><i data-feather="home"></i><span>Home</span></NavLink>
                    </li>
                    
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to='/comics' classNameName="nav-link estilos"><i data-feather="Comics"></i><span>Comics</span></NavLink>    
                    </li>
                    
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to='/series'  classNameName="nav-link estilos"><i data-feather="Series"></i><span>Series</span></NavLink>     
                    </li>
                    
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to='/characters'  classNameName="nav-link estilos"><i data-feather="Characters"></i><span>Characters</span></NavLink>   
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar