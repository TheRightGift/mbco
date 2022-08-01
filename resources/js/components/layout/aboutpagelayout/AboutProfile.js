import React from 'react'
import logo from "../aboutpagelayout/logo.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutProfile = () => {
  return (
    <section className='aboutprofile'>
      <div className="container">
      <AnimationOnScroll animateIn="animate__zoomIn">
      <img src={logo} alt="" className='logo' />
        <h2 className='secondary-heading'>
          Our Corporate Profile
        </h2>
        <p>Hence, the club sprung forth from friendship, shared love for the pointed star brand, and the will to help each other grow. The bond got stronger amongst fellow ‘Petrol Heads’ as some of them embarked on long drives to various destinations to ‘live just a little while the world was on its knees fighting a novel virus.

After a few drives and a little more discussion, they formalized the club and put a structure in place for fellow enthusiasts that want to belong to such a community of friends who support the aspirations of one another.

With all the necessary, mindset and right crop of individuals, they proceeded to the Corporate Affairs Commission to register the club as a not-for-profit entity and carried out other legally required activities to build such an organisation.

They further crafted out our mission and the vision of the club.</p>
<div className='hero-button'>
          <a download href="https://mbcon.ng/wp-content/uploads/2022/04/Main-Profile-2.pdf" className="secondary-bg btn register">Download Corporate Profile</a>
          </div></ AnimationOnScroll >

      </div>
    </section>
  )
}

export default AboutProfile