import React, {Fragment, useState} from 'react';
// import { Link } from "react-router-dom";
import logo from "../layout/logo.png";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const onChangeActiveLink = (linkName) => {
    setActiveLink(linkName)
  }
  
  return (
    <Fragment>
        <nav className='primary-bg'>
    <div className="nav-wrapper">
      <div className="container">
        <img src={logo} alt="" className="brand-logo logo" />
      {/* <a href="#!" className="brand-logo">Logo</a> */}
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/" className={`link ${activeLink === "home" && 'active'}`} onClick={() => onChangeActiveLink("home")}>Home</a></li>
        <li><a href="/about" className={`link ${activeLink === "about" && 'active'}`} onClick={() => onChangeActiveLink("about")}>About</a></li>
        <li><a href="/membership" className={`link ${activeLink === "membership" && 'active'}`} onClick={() => onChangeActiveLink("membership")}>Membership</a></li>
        <li><a href="/updates" className={`link ${activeLink === "updates" && 'active'}`} onClick={() => onChangeActiveLink("updates")}>Updates</a></li>
        <li><a href="/contact" className={`link ${activeLink === "contact" && 'active'}`} onClick={() => onChangeActiveLink("contact")}>Contact</a></li>
        <li><a href="#" className="login link secondary-bg btn">Login</a></li>
      </ul>
      </div>
      
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="/" className={`link ${activeLink === "home" && 'active'}`} onClick={() => onChangeActiveLink("home")}>Home</a></li>
        <li><a href="/about" className={`link ${activeLink === "about" && 'active'}`} onClick={() => onChangeActiveLink("about")}>About</a></li>
        <li><a href="/membership" className={`link ${activeLink === "membership" && 'active'}`} onClick={() => onChangeActiveLink("membership")}>Membership</a></li>
        <li><a href="/updates" className={`link ${activeLink === "updates" && 'active'}`} onClick={() => onChangeActiveLink("updates")}>Updates</a></li>
        <li><a href="/contact" className={`link ${activeLink === "contact" && 'active'}`} onClick={() => onChangeActiveLink("contact")}>Contact</a></li>
        <li><a className="login link secondary-bg  btn">Login</a></li>
  </ul>
        
    </Fragment>
  )
}

export default Navbar