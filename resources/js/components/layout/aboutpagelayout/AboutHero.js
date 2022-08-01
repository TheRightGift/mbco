import React from 'react'
import Aboutcar from '../aboutpagelayout/car5png.png'


const AboutHero = () => {
  return (
    <section className='about-hero'>
      <div className="container about-hero_grid">
        
        <div className="about-hero_content">
          <h2 className="primary-heading secondary-color">About Us</h2>
          <p>Sometimes you need a little crisis to get your adrenaline flowing and help you realize your potential.”<span className='secondary-color bold'> Jeannette Walls…</span></p>
        </div>
        <div className="about-hero_image">
          <img src={Aboutcar} alt="car" className="image-hero" />
        </div>
      </div>
      

    </section>
  )
}

export default AboutHero