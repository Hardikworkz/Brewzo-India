import { Link } from 'react-router-dom';
import heroVideo from '../../assets/brewzoo/video/hero-video.mp4';
import './BrewzoHero.css';

export default function BrewzoHero() {
  return (
    <section className="brewzo-hero" aria-label="Brewzo introduction">
      <video
        className="brewzo-hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="brewzo-hero__overlay" />

      <div className="brewzo-hero__content">
        <p className="brewzo-hero__eyebrow">Brewzo Cafe</p>
        <h1 className="brewzo-hero__title">brewzo.co</h1>
        <p className="brewzo-hero__copy">
          A warm, cozy coffee space built for slow mornings, meaningful moments, and
          cups worth coming back for.
        </p>
        <div className="brewzo-hero__actions">
          <Link to="/events" className="brewzo-hero__button">
            Explore Events
          </Link>
          <Link
            to="/reviews"
            className="brewzo-hero__button brewzo-hero__button-secondary"
          >
            Share A Review
          </Link>
        </div>
      </div>
    </section>
  );
}
