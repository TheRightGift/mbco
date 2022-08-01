import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import item1 from "../layout/item1.jpg"
import item2 from "../layout/item2.png"
import item3 from "../layout/item3.jpg"
import item4 from "../layout/item4.jpg"
import image9 from "../layout/image9.jpg"
import image8 from "../layout/image8.jpg"
import image11 from "../layout/image11.jpg"
import logo from "../layout/logo.png";

const Gallery = () => {
  return (
    <section className='gallerysection'>
      <div className='mb-md container'>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
        <h2 className='secondary-heading 
      text-white'>Our Gallery</h2>
      <p className='light-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sequi voluptates? Autem iste est quasi nobis assumenda illum eos dolorem.</p>
        </AnimationOnScroll>
      
      </div>
      
     
      <div className="gallery-grid">
        <div className=' gallery-container fade'>
        <img src={item2} alt="gallery"  />
        </div>
        <div className=' gallery-container fade'>
        <img src={image9} alt="gallery" />
        </div>
        <div className=' gallery-container fade'>
        <img src={item3} alt="gallery" />
        </div>
        <div className=' gallery-container fade'>
        <img src={item4} alt="gallery" />
        </div>
        <div className=' gallery-container fade'>
        <img src={item2} alt="gallery" />
        </div>
        <div className=' gallery-container fade'> 
        <img src={image8} alt="gallery" />
        </div>
        <div className=' gallery-container fade'>
        <img src={image11} alt="gallery" />
        </div>
        <div className=' gallery-container fade'>
        <img src={item4} alt="gallery" />
        </div>
       
        
      </div>
    
    

      



      





    </section>
  )
}

export default Gallery