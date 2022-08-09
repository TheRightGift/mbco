import React, { Fragment,useState,useEffect } from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import {FiPhone} from 'react-icons/fi';
import {FiMapPin} from 'react-icons/fi';

const Footer = () => {
  const [boundary, setBoundary] = useState(false)
  useEffect(()=>{
    if(window.location.pathname === '/admin'){
      setBoundary(true);
    }
  }, [])
  if(!boundary){
    return (
   

      <Fragment>
      <section className='footer'>
        <div className="container footer-grid">
          <div className="footer-left">
           <h3 className='tertiary-heading'>Stay Informed</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque ipsa veniam cupiditate eius corporis!</p>
          
           <div className="footer-left_icon">
              <a href="#"><FiInstagram className='icons'/> </a>
           <a href="#"><FiFacebook className='icons'/> </a>
           <a href="#"><FiTwitter className='icons'/></a>
           </div>
           </div>
          
         
          <div className="footer-right">
          <h3 className='tertiary-heading'>Contact Us</h3>
          <ul className="footer-info">
            <li className="footer-info-list">
            <span ><FiMail  className='icons'/> </span>
            <span className='info-text'> info@mbcon.ng</span>
            </li>
            <li className="footer-info-list">
            <span ><FiPhone  className='icons'/> </span>
            <span className='info-text'> 0809 428 2738, 0807 494 8058</span>
            </li>
            <li className="footer-info-list">
            <span ><FiMapPin  className='icons'/> </span>
            <span className='info-text'> 5A, Charles Ifeanyi Street, Off Adebayo Doherty, Lekki 1, Lagos.</span>
            </li>
          </ul>
          </div>
        </div>
      </section>
      </Fragment>
     
    )
  }
  
}

export default Footer