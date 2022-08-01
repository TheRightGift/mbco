import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import man1 from '../aboutpagelayout/man1.jpg'
import man2 from '../aboutpagelayout/man2.jpg'
import man3 from '../aboutpagelayout/man3.png'
import man4 from '../aboutpagelayout/man4.png'
import man5 from '../aboutpagelayout/man5.png'
import logo from "../aboutpagelayout/logo.png"

const AboutTeam = () => {
  return (
    <section className='aboutteam'>
      <img style={{"margin":"0 auto", "display":"block"}} src={logo} alt="" className='logo' />
      <h2 className="secondary-heading">Management Team</h2>
      
      <div className="container aboutteam-grid">
      <AnimationOnScroll animateIn="animate__zoomIn">
      <div className="aboutteam-card">
          <div className="aboutteam-img"><img src={man5} alt="" /></div>
          <div className="aboutteam-social">
          <a href="">  <FiFacebook className='icons' /></a>
           <a href=""> <FiTwitter className='icons' />  </a>
            <a href=""> <FiInstagram className='icons' /> </a>
          </div>
          <div className="aboutteam-content">
            <h3>Olaotan Adesuyi</h3>
            <p>Principal Engineer, Solutions Architecture Dell Technologies.</p>
          
          </div>

        </div></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="aboutteam-card">
          <div className="aboutteam-img"><img src={man1} alt="" /></div>
          <div className="aboutteam-social">
           <a href="">  <FiFacebook className='icons' /></a>
           <a href=""> <FiTwitter className='icons' />  </a>
            <a href=""> <FiInstagram className='icons' /> </a>
           
          </div>
          <div className="aboutteam-content">
            <h3>Biodun Elemide</h3>
            <p>Team Lead Data Centre Operations, Tec-Blu Limited</p>
          
          </div>

        </div></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="aboutteam-card">
          <div className="aboutteam-img"><img src={man2} alt="" /></div>
          <div className="aboutteam-social">
          <a href="">  <FiFacebook className='icons' /></a>
           <a href=""> <FiTwitter className='icons' />  </a>
            <a href=""> <FiInstagram className='icons' /> </a>
          </div>
          <div className="aboutteam-content">
            <h3>Olaoluwa Adesina</h3>
            <p>Principal partner at
Carsfromnaija Ltd</p>
          
          </div>

        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="aboutteam-card">
          <div className="aboutteam-img"><img src={man3} alt="" /></div>
          <div className="aboutteam-social">
          <a href="">  <FiFacebook className='icons' /></a>
           <a href=""> <FiTwitter className='icons' />  </a>
            <a href=""> <FiInstagram className='icons' /> </a>
          </div>
          <div className="aboutteam-content">
            <h3>Gbolabo Awelewa</h3>
            <p>CTO | Country Manager
  Infoprive – esentry</p>
          
          </div>

        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="aboutteam-card">
          <div className="aboutteam-img"><img src={man4} alt="" /></div>
          <div className="aboutteam-social">
          <a href="">  <FiFacebook className='icons' /></a>
           <a href=""> <FiTwitter className='icons' />  </a>
            <a href=""> <FiInstagram className='icons' /> </a>
          </div>
          <div className="aboutteam-content">
            <h3>Yanju Adeniyi</h3>
            <p>Managing Partner,
Bayline Solicitors Lagos.</p>
          
          </div>

        </div></AnimationOnScroll>
       
           
      </div>
    </section>
  )
}

export default AboutTeam