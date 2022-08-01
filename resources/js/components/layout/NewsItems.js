import React from 'react'
import image10 from "../layout/image10.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const NewsItems = () => {
  return (
    
<div className='news-grid'>
      
      <div className="news">
        <div className="news-content">
          <img src={image10} alt="" />
        <h3 className="tertiary-heading">Hunger the Real Pandemic Project - May 1, 2021.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum quis sit accusantium aut voluptates. A fugit perferendis quasi.</p>
          <div className='hero-button'>
          <a className="secondary-bg btn register">Learn More</a>
          </div>
        </div>
          
      </div>
      {/*  */}
      <div className="news">
        <div 
        className="news-content">
          <img src={image10} alt="" />
        <h3 className="tertiary-heading"> Highlights of the Recently Concluded Ondo Auto Rally 2022</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum quis sit accusantium aut voluptates. A fugit perferendis quasi.</p>
          <div className='hero-button'>
          <a className="secondary-bg btn register">Learn More</a>
          </div>
        </div>
          
      </div>
      {/*  */}
      <div className="news">
        <div className="news-content">
        <img src={image10} alt="" />
        <h3 className="tertiary-heading"> MBCON Partners Cancer Aware Nigeria to Raise Fund</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus cum quis sit accusantium aut voluptates. A fugit perferendis quasi.</p>
          <div className='hero-button'>
          <a className="secondary-bg btn register">Learn More</a>
          </div>
        </div>
          
      </div>

    </div>
    
    
  )
}

export default NewsItems