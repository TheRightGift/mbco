import React from 'react'
import logo from "../membershipagelayout/logo.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Register from '../../pages/Register';

const Benefitjoin = () => {
  return (
    <section className='aboutprofile'>
    <div className="container">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <h2 className='secondary-heading'>Benefits of Joining MBCON</h2>
        <ul className="benefit-list">
          <li><span className='benefit-item'> <img src={logo} alt="" className="logo" /></span> <span>  We are committed to offering members, family, friends, guests and other interested parties opportunities in social establishments to participate in events with Mercedes-Benz and other branded vehicles deemed appropriate at local and international levels  </span>
          </li>
          <li><span className='benefit-item'> <img src={logo} alt="" className="logo"/></span><span>  Serve the interests of members through official means that are obtainable in-country and give back to the society. </span>
          </li>
          <li><span className='benefit-item'> <img src={logo} alt="" className="logo" /></span> <span>   We have provided a safe haven with an umbrella for fellow enthusiasts who love motorsports as well as own and love the brand Mercedes Brand.</span>
          </li>
          <li><span className='benefit-item'> <img src={logo} alt="" className="logo" /></span><span>Above all, we are open for business, we are willing to work with other organisations to promote the “car culture” and build a thriving automobile community in Nigeria and Africa. </span>
          </li>
        </ul>
        <div className='hero-button'>
          <a href="#register" className="secondary-bg btn modal-trigger register">Become a member</a>
        </div>
      </AnimationOnScroll >
      <Register/>
    </div>
  </section>
  )
}

export default Benefitjoin