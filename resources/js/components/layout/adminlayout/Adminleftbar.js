import React from 'react'
import man1 from "./man1.jpg"
import { FaBirthdayCake } from 'react-icons/fa';

const Adminleftbar = () => {
  return (
    <section className='admin-leftbar'>
      <div className="admin-leftbar_birthday">
        <div className='birthday-grid'> < FaBirthdayCake className='birthday-icon'/>
        <img src={man1} alt="" /></div>
        
     
     <div className='admin-leftbar_birthday'>
      <small>Today is</small>
      <h5>Akereke Adebayo's <br />Birthday</h5>
      <p>Leave him a message with your best wishes on her profile page!</p>
     </div>
      </div>




    </section>
  )
}

export default Adminleftbar