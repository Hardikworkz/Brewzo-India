import { Link } from 'react-router-dom';
import heroVideo from '../../assets/brewzoo/video/hero-video.mp4';
import './BrewzoHero.css';

export default function BrewzoHero() {
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .brewzo-hero {
              height: auto;
              padding: 14px;
              box-sizing: border-box;
            }

            .brewzo-hero .main {
              height: auto;
              aspect-ratio: 4 / 5;
              min-height: 0;
            }

            .brewzo-hero .brewzo-hero__video {
              margin: 0;
              width: 100%;
              height: 100%;
              border-radius: 24px;
              box-sizing: border-box;
            }

            .brewzo-hero .logo {
              top: 22px;
              left: 26px;
              transform: none;
              max-width: calc(100% - 52px);
            }

            .brewzo-hero .logo__title {
              font-size: clamp(2.9rem, 13vw, 5rem);
              line-height: 0.9;
              letter-spacing: -1.6px;
            }
          }

          @media (max-width: 480px) {
            .brewzo-hero {
              padding: 10px;
            }

            .brewzo-hero .main {
              aspect-ratio: 4 / 5.25;
            }

            .brewzo-hero .brewzo-hero__video {
              border-radius: 20px;
            }

            .brewzo-hero .logo {
              top: 18px;
              left: 20px;
              max-width: calc(100% - 40px);
            }

            .brewzo-hero .logo__title {
              font-size: clamp(2.5rem, 12vw, 4.3rem);
              letter-spacing: -1.2px;
            }
          }
        `}
      </style>
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
    </>
  );
}
