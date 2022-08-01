import React,{Fragment} from 'react'
import AboutHero from '../layout/aboutpagelayout/AboutHero'
import AboutCoperate from '../layout/aboutpagelayout/AboutCoperate'
import AboutTeam from '../layout/aboutpagelayout/AboutTeam'
import AboutStory from '../layout/aboutpagelayout/AboutStory'
import AboutProfile from '../layout/aboutpagelayout/AboutProfile'

const About = () => {
  return (
    <Fragment>
      <AboutHero />
      <AboutStory/>
      <AboutCoperate />
      <AboutProfile />
      <AboutTeam /> 
    </Fragment>
  )
}

export default About