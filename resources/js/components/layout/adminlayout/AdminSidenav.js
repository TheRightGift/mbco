import React from 'react'
import profile from "./profile.jpg"
import profile1 from "./man1.jpg"
import profile2 from "./man2.jpg"
import profile3 from "./man3.png"
import profile4 from "./man4.png"
import profile5 from "./man5.png"

const AdminSidenav = () => {
  return (
    <section className='admin-sidenav'>
    <ul className="side-nav">
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile} alt="" /></a><span className='live'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile1} alt="" /></a><span className='live'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile2} alt="" /></a><span className='live'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile3} alt="" /></a><span className='away'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile4} alt="" /></a><span className='live'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile5} alt="" /></a><span className='away'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile} alt="" /></a><span className='live'></span></li>
       <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile3} alt="" /></a><span className='live'></span></li>
       {/* <li className='side-nav_item'><a href="" className='side-nav_link'> <img src={profile} alt="" /></a><span className='live'></span></li> */}
      
        
    </ul>
    <div className="legal grey-text">
      <small>
        &copy; 2022 by MBCON, All rights reserved
      </small>      
    </div>
    </section>
  )
}

export default AdminSidenav