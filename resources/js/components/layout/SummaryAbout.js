import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Typewriter from 'typewriter-effect';

const SummaryAbout = () => {
  return (
    <section className='sum-about'>
      <div className="container">
        {/* <AnimationOnScroll animateIn="animate__fadeIn">
        
        <h2 className='shadow'>The <span className='secondary-color'>Mercedes-Benz Club of Naija</span> (MBCON) is an automotive club made up of enthusiasts brought together by the love for Mercedes-Benz, one of the leading motoring companies in the world. MBCON is the largest growing community of automotive brand enthusiasts in Nigeria, sporting a record of 40 new members in Q1 2021 alone…</h2>
        </AnimationOnScroll> */}
        <AnimationOnScroll animateIn="animate__fadeIn">
        
        <h2 className='shadow'>The <span className='secondary-color'>Mercedes-Benz Club of Naija (MBCON)</span><Typewriter
        
  options={{
    strings: ['is an automotive club made up of enthusiasts brought together by the love for Mercedes-Benz, one of the leading motoring companies in the world. MBCON is the largest growing community of automotive brand enthusiasts in Nigeria, sporting a record of 40 new members in Q1 2021 alone…'],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
        </AnimationOnScroll>
        <h3 className='light-text'>
        

        </h3>
        
      </div>
   
      </section>
  )
}

export default SummaryAbout