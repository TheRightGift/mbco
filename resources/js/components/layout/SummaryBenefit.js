import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from "../layout/logo.png";

const SummaryBenefit = () => {
  return (
    <section className='summary-benefit'>
      
      <div className="container">
        <AnimationOnScroll animateIn="animate__zoomIn">
        <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
        <h2 className='secondary-heading'>Membership Benefit</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero a officiis obcaecati sit nam est, voluptate maxime ex temporibus consectetur consequuntur quidem consequatur debitis modi neque tempore eum quis aperiam?</p>
        <div className='hero-button'>
          <a className="primary-bg btn register">Learn More</a>
          </div>
        </AnimationOnScroll>
        
          
      </div>
      <div className='memberfit-img'></div>
      
      
      
      </section>
  )
}

export default SummaryBenefit