import { Fragment } from "react"
import img1 from '../../assets/Imagenes/1.jpeg';
import img2 from '../../assets/Imagenes/2.jpeg';
import img3 from '../../assets/Imagenes/3.jpeg';
import img4 from '../../assets/Imagenes/4.jpeg';
import img5 from '../../assets/Imagenes/5.jpeg';
import img6 from '../../assets/Imagenes/6.jpeg';
import img7 from '../../assets/Imagenes/7.jpeg';
import img8 from '../../assets/Imagenes/8.jpeg';
import img9 from '../../assets/Imagenes/9.jpeg';
import img10 from '../../assets/Imagenes/10.jpeg';
import img11 from '../../assets/Imagenes/11.jpeg';
import img12 from '../../assets/Imagenes/12.jpeg';
import img13 from '../../assets/Imagenes/13.jpeg';
import img14 from '../../assets/Imagenes/14.jpeg';
import "./home.css"



const Home = () => {
    return (
        <Fragment>
            <main className="containerHome">
                <h1 className="titleHome"><strong>Home</strong></h1>
                
                <h5>In this project that I have carried out, it is to show the Marvel characters, the comics and the series, obtaining the same data by consuming the Marvel API. The project is made with the following technologies: HTML, CSS, JavaScrit, React and Vite</h5>
            </main>

            <section className="marquee">
                <ul className="marquee__content">
                    <li className="marquee__item"><img src={img1}  alt="1"/></li>
                    <li className="marquee__item"><img src={img2} alt="2"/></li>
                    <li className="marquee__item"><img src={img3} alt="3"/></li>
                    <li className="marquee__item"><img src={img4} alt="4"/></li>
                    <li className="marquee__item"><img src={img5} alt="5"/></li>
                    <li className="marquee__item"><img src={img6} alt="6"/></li>
                    <li className="marquee__item"><img src={img7} alt="7"/></li>
                    <li className="marquee__item"><img src={img8} alt="8"/></li>
                    <li className="marquee__item"><img src={img9} alt="9"/></li>
                    <li className="marquee__item"><img src={img10} alt="10"/></li>
                    <li className="marquee__item"><img src={img11} alt="11"/></li>
                    <li className="marquee__item"><img src={img12} alt="12"/></li>
                    <li className="marquee__item"><img src={img13} alt="13"/></li>
                    <li className="marquee__item"><img src={img14} alt="14"/></li>
                </ul>
            </section>
        </Fragment>
    )
}


export default Home