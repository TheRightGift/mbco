import React from 'react'
import logo from "../layout/logo.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Autosection = () => {
  return (
    <section className='autosection' >
      <AnimationOnScroll animateIn="animate__zoomIn">
      <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
      <h2 className='secondary-heading text-white thin'> Automative Class</h2>
      </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeIn">
    <div className='autosection-img'></div>
    </AnimationOnScroll>
   

    </section>
  )
}

export default Autosection