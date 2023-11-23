import logo from '../../assets/Imagenes/infoMarvelLogo.png'
import facebook from '../../assets/Imagenes/facebook.png'
import github from '../../assets/Imagenes/github.png'
import linkedin from '../../assets/Imagenes/linkedin.png';
import "./footer.css"


const Footer = () => {
    return (
        <footer id='containerFooter'>
            <img id='logoFooter' src={logo} alt="Logo Prosche" />

            <a id='rrss1' href="https://www.linkedin.com/in/facundolucasmarco/" alt="LinkedIn" target="_blank" rel="noreferrer"><img className='imgsFooter' src={linkedin} alt="linkedin"/></a>
            <a id='rrss2' href="https://github.com/FacundoMarcoBacigalupo" alt="GitHub" target="_blank" rel="noreferrer"><img className='imgsFooter' src={github} alt="github"/></a>
            <a id='rrss3' href="https://www.facebook.com/profile.php?id=100077291057406" alt="Facebook" target="_blank" rel="noreferrer"><img className='imgsFooter' src={facebook} alt="facebook"/></a>

            <p id='copyright'>Argentina, Buenos Aires ©2023 Prosoche. All rights reserved. Made by Facundo Marco Bacigalupo</p>
        </footer>
    )
}


export default Footer