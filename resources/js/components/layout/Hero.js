import React from 'react';


import imagehero from '../layout/heroimage.png'
const Hero = () => {
  return (
    <section className='hero'>
  
      <div className=" container hero-grid">
        <div className="hero-content">
       
        <h1>We are <span className='primary-color'>MBCON</span></h1>


        <p>The Mercedes-Benz Club of Naija (MBCON) is an automative club made up of enthusiasts brought together by the love for Mercedes-Benz, one of the leading motoring companies in the world.</p>
          <div className='hero-button'>
          <a className="primary-bg btn register">Be a member</a>
          </div>
        </div>
        <div className="hero-img">
          <img src={imagehero} alt="" className='image-hero' />
          </div>
     
    </div>
    </section>
  )
}

export default Hero