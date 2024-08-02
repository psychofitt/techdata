'use client';

import React from 'react';
import Header from '../app/components/header';
import Hero from '../app/components/hero';
import Recounter from '../app/components/counter';
import About from '../app/components/about';
import Footer from '../app/components/footer';
import Feature from '../app/components/feature';
import Services from '../app/components/services';
import Cta from '../app/components/cta';
import Faq from '../app/components/faq';
import TawkToScript from '../app/components/chatbot';
import StickySocialMediaBar from './components/stickysocialmediabar';
import SparklesPreview from './components/techdatabanner';
import Marquee from './components/partner';
import Slides from './components/slidepartner';







const MainComponent = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Recounter />
      <Marquee />

      <Feature />
     
      <Services />
      <Faq />
    
      <SparklesPreview />

      <Cta />
      <Slides/>
      <TawkToScript />
      <StickySocialMediaBar />
      <Footer />

    </div>
  );
};

export default MainComponent;
