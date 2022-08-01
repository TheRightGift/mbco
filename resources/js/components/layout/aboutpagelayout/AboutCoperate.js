import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FiSettings } from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';

const AboutCoperate = () => {
  return (
    <section className='about-coperate'>
      <div className="container about-coperate-grid">
      <AnimationOnScroll animateIn="animate__zoomIn">
         <div 
         className="about-copearte_item">
         <FaRegLightbulb className='icons'/>
              <h3 className='tertiary-heading'>Mission Statement</h3>
              <p>Our mission is to support the dreams and aspirations of enthusiasts of Mercedes-Benz vehicles in ways that will enhance the brand, encourage and improve the enjoyment and ownership of Mercedes-Benz Vehicles amongst professionals and entrepreneurs in Africa.</p>
         </div></AnimationOnScroll>
         <AnimationOnScroll animateIn="animate__zoomIn">
         <div className="about-copearte_item">
         <FaRegEyeSlash className='icons'/>
              <h3 className='tertiary-heading'>Vision Statement</h3>
              <p>MBCON wants to foster friendship, love and transformation in a community divided across religion, tribe and ethnicity. We want to break that barrier creating an atmosphere that fosters growth.</p>
         </div>
         </AnimationOnScroll>
         <AnimationOnScroll animateIn="animate__zoomIn">
         <div className="about-copearte_item">
         <FiSettings className='icons'/>
              <h3 className='tertiary-heading'>Operating Philisophy</h3>
              <p>Our operating philosophy resonates around the values we have created for both members of the club and the community where we find ourselves. </p>
            
              
         </div></AnimationOnScroll>
      </div>
    </section>
  )
}

export default AboutCoperate