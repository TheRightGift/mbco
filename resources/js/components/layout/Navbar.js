import React, {Fragment, useState, useEffect} from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiMessageCircle } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {useLocation} from 'react-router-dom'
// import { Link } from "react-router-dom";

import logo from "../layout/logo.png";
import profile from "./adminlayout/profile.jpg"

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname.split("/")[1]);
  const [boundary, setBoundary] = useState(false)
  const onChangeActiveLink = (linkName) => {
    setActiveLink(linkName)
  }
  
  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
  })

  useEffect(()=>{
    if(window.location.pathname === '/admin'){
      setBoundary(true);
    }
  }, [])

  if(!boundary){
    return (
    
    <Fragment>
    
      
        <nav className='primary-bg'>
          <div className="nav-wrapper">
            <div className="container">
              <img src={logo} alt="" className="brand-logo logo" />
      
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/" className={`link ${activeLink === "" && 'active'}`} onClick={() => onChangeActiveLink("home")}>Home</a></li>
                <li><a href="/about" className={`link ${activeLink === "about" && 'active'}`}>About</a></li>
                <li><a href="/membership" className={`link ${activeLink === "membership" && 'active'}`} >Membership</a></li>
                <li><a href="/updates" className={`link ${activeLink === "updates" && 'active'}`} >Updates</a></li>
                <li><a href="/contact" className={`link ${activeLink === "contact" && 'active'}`} >Contact</a></li>
                <li><a  className="login modal-trigger link secondary-bg btn" href="#login">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="/" className={`link ${activeLink === "" && 'active'}`}>Home</a></li>
              <li><a href="/about" className={`link ${activeLink === "about" && 'active'}`}>About</a></li>
              <li><a href="/membership" className={`link ${activeLink === "membership" && 'active'}`}>Membership</a></li>
              <li><a href="/updates" className={`link ${activeLink === "updates" && 'active'}`} >Updates</a></li>
              <li><a href="/contact" className={`link ${activeLink === "contact" && 'active'}`} >Contact</a></li>
              <li><a  className="login modal-trigger link secondary-bg btn" href="#login">Login</a></li>
        </ul>
      
        <div  id="login" className="modal">
      
      <div className="login-grid">
        <div className="modal-content login-left">
          <div className="login-left">
            <h3>Welcome back</h3>
            <p> Please enter your details.</p>
            <form className="col s12">
              {/* <div className="row">
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate" />
                  <label for="first_name">Full Name</label>
                </div>
                </div> */}
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate " />
                  <label for="password">Password</label>
                </div>
              </div>
              
              <div className='hero-button'>
                <a style={{"width":"100%"}}  href="admin"className="primary-bg btn register"> Login </a>
              </div>

            </form>

            <div className="modal-footer">
              <a  style={{"width":"100%"}} className="secondary-bg btn register modal-close"> Cancel </a>
            </div>
          </div>
        </div>
     
        <div className="login-right"></div>
      </div>    
    </div>



        
    </Fragment>
  )
  }

  if(boundary){
    // TODO: code navigation for routes that needs authentication
    {/* admin navbar */}

    return(
    <>    
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!" className='admin-link'><span><FiSettings/> </span>Profile</a></li>
          <li><a href="#!" className='admin-link'><span><FiLock/> </span>Change password</a></li>
          <li><a href="#!" className='admin-link'><span><FiLogOut/> </span>logout</a></li>
        
          
          <li><a href="/" className='admin-link'><span><FiGlobe/> </span>Visit Website</a></li>
          <li className="divider"></li>
          <li><a href="#!" className='admin-link'>Contact Us</a></li>
          <li><a href="#!" className='admin-link'>Privacy and policy</a></li>
          <li><a href="#!" className='admin-link'>Terms & Conditions</a></li>
          
        </ul>   
        <header className='admin-header'>
        <img src={logo} alt="" className="brand-logo logo" />
      
        <form action="#" className='search'>
          <input type="text"  className='search_input' placeholder='Search Messages'/>
          <button className='search_button'>
            <FiSearch className='search_icon'/>
          </button>

        </form>
        <div className="user-nav">
          <div className="user-nav_icon-box">
        <FiMessageCircle  className='user-nav_icon'/>
        <span className="user-nav_notification">7</span>
          </div>
          <div className="user-nav_icon-box">
        <IoIosNotifications  className='user-nav_icon'/>
        <span className="user-nav_notification">13</span>
          </div>
          <div className="user-nav_user">
          <img src={profile} alt="User Photo" className='user-nav_user-photo' />
          <span className="user-nav_user-name"><a className="dropdown-trigger" href="#!" data-target="dropdown1">Bayo<i className="material-icons right">arrow_drop_down</i></a></span>
        </div>
      </div>
      

      </header> 
    </>
 
    )
    
  }
  
}

export default Navbar