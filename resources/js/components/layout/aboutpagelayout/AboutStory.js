import React from 'react'
import logo from "../aboutpagelayout/logo.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutStory = () => {
  return (
    <section className='aboutstory'>
      <div className="container">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <img src={logo} alt="" className='logo' />
        <h2 className='secondary-heading'>
          Our Story
        </h2>
        <p>The idea of forming the Mercedes-Benz club was born out of the uncertainties of a certain time when the Covid pandemic plagued the entire country and the world at large. But out of the mud, they say, comes the diamond. And thus the story goes….

On a regular day, a few good friends who are cordial and social came together to have a casual night of banters as friends do.

Conversations spiraled into topics bordering on the effect the pandemic had on being able to drive their respective cars.  This discussion further spiraled into how they enjoyed the power beneath their feet when they tasked the strength of their automobiles.

Then a forgotten idea was remembered. This is so because the idea of starting an automotive club has been in the works for long.</p>
<p className='secondary-color bold'>Then, we decided it will be a great idea to have a closely knit community of enthusiasts with a love for the Mercedes-Benz brand. A community with social activities where the bond of friendship can be strengthened through shared love for the brand. And a platform for supporting one another.</p></AnimationOnScroll>
      </div>
    </section>
  )
}

export default AboutStory