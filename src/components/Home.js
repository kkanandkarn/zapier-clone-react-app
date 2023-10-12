import React from 'react'
import '../App.css';
import Alert from './Alert';
import Builderblock from './Builderblock';
import Cards from './Cards';
import Featuresection from './Featuresection';
import Footer from './Footer';
import Herosection from './Herosection';
import ImageMarquee from './ImageMarquee';
import Navbar from './Navbar';
import Simplefeaturessection from './Simplefeaturessection';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Alert />
      <Navbar />
      <Herosection />
      <ImageMarquee />
      <Cards />
      <Featuresection />
      <Simplefeaturessection />
      <Testimonials />
      <Builderblock />
      <Footer />
    </div>
  )
}

export default Home
