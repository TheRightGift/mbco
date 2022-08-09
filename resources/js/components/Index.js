import React,{Fragment, useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    useEffect(()=>{
        // Init Materialize JS
        // M.AutoInit();
    })
    return (
        <Fragment>
            <Navbar />
                <Routes>
                
                <Route  path="/" element={<Home />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/membership" element={<Membership />} />
                <Route  path="/updates" element={<Updates />} />
                <Route  path="/contact" element={<Contact />} />
                <Route  path="/admin" element={<AdminPage />} />
                    
                </Routes>    
            <Footer />
        </Fragment>
    );
}

export default App;

if (document.getElementById('mainView')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('mainView'));
}
