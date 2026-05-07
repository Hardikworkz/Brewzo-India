import { Link } from 'react-router-dom';
import heroVideo from '../../assets/brewzoo/video/hero-video.mp4';
import './BrewzoHero.css';

export default function BrewzoHero() {
  return (
    <section className="brewzo-hero" aria-label="Brewzo introduction">
      <div className="main">
        <video className="brewzo-hero__video" src={heroVideo} autoPlay loop muted playsInline />
        <div className="logo">
          <h1 className="logo__title">Brewzo </h1>
        </div>
      </div>

      <div className="brewzo-hero__overlay" />
      <div className="brewzo-hero__content">
        
        </div>
      
    </section>
  );
}
