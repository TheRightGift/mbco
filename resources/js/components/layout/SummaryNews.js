import React from 'react'
import NewsItems from './NewsItems'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logo from "../layout/logo.png";


const SummaryNews = () => {
  return (
    <section className='summary-benefit'>
      
    <div className="container">
      <AnimationOnScroll animateIn="animate__zoomIn">
      <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
      <h2 className='secondary-heading'>Updated News</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero a officiis obcaecati sit nam est, voluptate maxime ex temporibus consectetur consequuntur quidem consequatur debitis modi neque tempore eum quis aperiam?</p>
      <div className='hero-button'>
        <a className="primary-bg btn register">View More</a>
        </div>

      </AnimationOnScroll>

        <NewsItems />
    </div>
    
    
    
    </section>
  )
}

export default SummaryNews