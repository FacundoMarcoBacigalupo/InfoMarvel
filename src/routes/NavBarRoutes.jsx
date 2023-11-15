import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import Comics from '../components/Comics/Comics.jsx'
import Series from '../components/Series/Series.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Characters from '../components/Characters/Characters.jsx';
import Error404 from '../components/Error404/Error404.jsx'




const NavBarRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/comics' element={<Comics/>} />
                <Route exact path='/series' element={<Series/>} />
                <Route exact path='/characters' element={<Characters/>} />


                <Route path='*' element={<Error404/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default NavBarRoutes