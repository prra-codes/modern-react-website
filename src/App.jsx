import React from 'react';

import Navbar from './components/navbar/Navbar.jsx';
import Header from './containers/header/Header.jsx';
import Brand from './components/brand/Brand.jsx';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3.jsx';
import Features from './containers/features/Features.jsx';
import Possibility from './containers/possibility/Possibility.jsx';
import CTA from './components/cta/CTA.jsx';
import Blog from './containers/blog/Blog.jsx';
import Footer from './containers/footer/Footer.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
