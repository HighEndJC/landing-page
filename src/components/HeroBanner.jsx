// src/components/HeroBanner.js
import React from 'react';
import "../index.css"; 
import heroImage from '../assets/Mountain-Hiking.jpg';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
    <img src={heroImage} alt="Hero" id='banner-image'/>  
    </section>
  );
};

export default HeroBanner;