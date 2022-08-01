import React, {Fragment} from 'react'
import Hero from '../layout/Hero';
import Autosection from '../layout/Autosection';
import Gallery from '../layout/Gallery';
import SummaryAbout from '../layout/SummaryAbout';
import SummaryBenefit from '../layout/SummaryBenefit';
import SummaryNews from '../layout/SummaryNews';
import Sponsor from '../layout/Sponsor';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Autosection />
      <Gallery />
      <SummaryAbout />
      <SummaryBenefit />
      <SummaryNews />
      <Sponsor />
      
      
    

    </Fragment>
  )
}

export default Home