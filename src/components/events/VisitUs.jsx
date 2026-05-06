import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VisitUs.css';
import visit_img from '../../assets/visit.jpeg';


// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const VisitUs = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Scroll-driven animation for the background image
    const animation = gsap.to(bgRef.current, {
      scale: 1.15, // Adjust this value to control how much it zooms
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Starts when the top of the container hits the top of the viewport
        end: "bottom top", // Ends when the bottom of the container hits the top of the viewport
        scrub: 1, // Smooth scrubbing effect
      }
    });

    // Cleanup on unmount
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="hero-container" ref={containerRef}>
      
      
      <div 
        className="hero-background" 
        ref={bgRef}
         
      >
        <img src={visit_img} alt="" />
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        
        {/* Top Text Block */}
        <div className="hero-text-block">
          <div className="hero-title-row">
            <h1>Come Visit Us</h1>
           
            <div className="bike-logo-placeholder">
               <span role="img" aria-label="bike and coffee"> </span>
            </div>
          </div>
          <p>
            Visit Brewzo in Arera Colony for specialty coffee, cafe comfort
            food, and a warm everyday space made for slow mornings, work
            breaks, and easy catch-ups over great brews.
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="hero-actions">
          <a className="btn-green-location" href="https://www.google.com/maps/place/Brewzo+Cafe/@23.2149502,77.4328824,17z/data=!3m1!4b1!4m6!3m5!1s0x397c433251ebff51:0x43b0a7672908d556!8m2!3d23.2149502!4d77.4328824!16s%2Fg%2F11y464df2z?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D">GO TO ARERA COLONY LOCATION</a>
      
        </div>
        
      </div>
    </div>
  );
};

export default VisitUs;
