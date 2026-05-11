import React, { useState } from 'react';
import ourStoryImage from '../../assets/brewzoo/images/our-story.png';
import './BrewzoStory.css';
import doodleImage from '../../assets/beer.png';

export default function BrewzoStory() {
  const [isDoodleHovered, setIsDoodleHovered] = useState(false);

  return (
    <section className="brewzo-story" aria-label="Our story">
      <div className="brewzo-story__content">
        <div className="brewzo-story__image-panel">
          <img className="brewzo-story__image" src={ourStoryImage} alt="Brewzo cafe story" />
        </div>

        <div className="brewzo-story__panel">
          <div className="story">
          <h2 className="brewzo-story__heading">Our story</h2>

          <p className="brewzo-story__text">
            Brewzo didn&apos;t start as a business plan. It started as a feeling. A
            love for slow mornings, the comfort of a warm cup of coffee, and the
            kind of spaces where time seems to pause for a while. What began as
            small ideas over countless cups slowly turned into something more: a
            place where people could come not just for coffee, but for the moments
            around it. Today, Brewzo is that space. A cozy corner where
            conversations flow, work feels lighter, and every cup and every bite is
            made with the same care it all started with.
          </p>
          </div>
          <div
            className="story-doodle"
            onMouseEnter={() => setIsDoodleHovered(true)}
            onMouseLeave={() => setIsDoodleHovered(false)}
            onFocus={() => setIsDoodleHovered(true)}
            onBlur={() => setIsDoodleHovered(false)}
            style={{ position: 'relative' }}
          >
            <div
              aria-hidden={!isDoodleHovered}
              style={{
                position: 'absolute',
                right: '88px',
                bottom: '112px',
                padding: '8px 14px',
                border: '2px solid #5a342a',
                borderRadius: '28px 28px 28px 8px',
                backgroundColor: '#fff9f2',
                color: '#5a342a',
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 18px rgba(82, 44, 37, 0.12)',
                opacity: isDoodleHovered ? 1 : 0,
                transform: isDoodleHovered ? 'translateY(0)' : 'translateY(8px)',
                pointerEvents: 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
            >
              Slow Sips, Sweet Stories
            </div>
            <img src={doodleImage} alt="Story doodle bear" />
          </div>
        </div>
      </div>
    </section>
  );
}
