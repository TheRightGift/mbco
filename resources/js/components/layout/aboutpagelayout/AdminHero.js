import React from 'react'
import { BiTimeFive } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
const AdminHero = () => {
  return (
    <section className='admin-hero'>
      <div className="">
      
      
        <h2>
          Upcoming Event:  
          <br /> <span>Car wash for charity event. </span>
          
        </h2>
        <p>In collaboration with @canceraware_ @mercedesbenzclubofnaija will be on the 1st of May presenting to you "Car wash for Charity".
Please clear your calendars and come "wash your cars, bikes, trucks to support the fight against cancer".
</p>
<div className="admin-hero_grid">
<div className="admin-hero_info">
  < BiTimeFive className='admin-hero_icon' />
  <p>12pm</p>

</div>
<div className="admin-hero_info">
  < FiMapPin  className='admin-hero_icon'/>
  <p>Lekki Phase 1, lagos Island</p>

</div>
<div className="admin-hero_info">
  < BsCalendar2Date className='admin-hero_icon'/>
  <p>1st of May.</p>

</div>
</div>

      </div>
    </section>
  )
}

export default AdminHero