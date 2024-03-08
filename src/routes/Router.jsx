import {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home.jsx';
import { Detail } from '../pages/Detail.jsx';
import { Notfound } from '../pages/Notfound.jsx';
import { Footer } from '../components/shared/Footer.jsx';
import { Navbar } from '../components/shared/Navbar.jsx';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/detail/:movieId' element={<Detail />} />
                <Route component={Notfound} />
            </Routes>
            <Footer />
            </BrowserRouter>


        );
    }
}

export default Router;