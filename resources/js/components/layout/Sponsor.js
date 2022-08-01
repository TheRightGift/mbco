import React , {useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import sponsor1 from '../layout/1.png'
import sponsor2 from '../layout/2.png'

import sponsor4 from '../layout/4.png'
import sponsor6 from '../layout/6.png'
import sponsor5 from '../layout/5.png'
import logo from "../layout/logo.png";


const Sponsor = () => {
  
    useEffect(()=>{
      // Init Materialize JS
      M.AutoInit();
    })
  return (
    <section className='sponsors'>
      <div className="container">
        <AnimationOnScroll animateIn="animate__zoomIn">
        <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
        <h2 className='secondary-heading text-white'>Our Sponsors</h2>
      <p className='light-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sequi voluptates? Autem iste est quasi nobis assumenda illum eos dolorem.</p>
        </AnimationOnScroll>
   
     <AnimationOnScroll animateIn="animate__fadeIn">
     <div className="carousel"  >
    <a className="carousel-item" href="#one!"><img src={sponsor1} /></a>
    <a className="carousel-item" href="#two!"><img src={sponsor2} /></a>
    <a className="carousel-item" href="#three!"><img src={sponsor4} /></a>
    <a className="carousel-item" href="#four!"><img src={sponsor5} /></a>
    <a className="carousel-item" href="#five!"><img src={sponsor6} /></a>
  </div>
     </AnimationOnScroll>
     
      </div>
    </section>
  )
}

export default Sponsor