import React from 'react';
import { Link } from 'react-router-dom';
import './BrewzoFooter.css';
import {
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { SiSwiggy, SiZomato } from 'react-icons/si';
import LogoLoop from './LogoLoop';

const brewzoFeedModules = import.meta.glob('../../assets/brewzo feed/*.{jpg,mp4}', {
  eager: true,
  import: 'default',
});

const companyLinks = [
  { to: '/#about', label: 'About' },
  { to: '/#review', label: 'Reviews' },
  { to: '/reviews', label: 'Contact' },
  { to: '/events', label: 'Events' }
];

const shopLinks = [
  { to: '/#bakery', label: 'Coffee' },
  { to: '/#bakery', label: 'All Day' },
  { to: '/#bakery', label: 'Mains' },
  { to: '/#bakery', label: 'Sides' },
  { to: '/#bakery', label: 'Platter' },
];

function FooterDropdown({ title, links, defaultOpen = false }) {
  return (
    <details className="footer-dropdown" open={defaultOpen}>
      <summary>{title}</summary>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

const BrewzoFooter = () => {
  const fallbackGram =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Crect width='110' height='110' fill='%23d8b08f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='11' fill='%23503326'%3EBrewzo Feed%3C/text%3E%3C/svg%3E";
  const brewzoFeedItems = Object.entries(brewzoFeedModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src], index) => ({
      src,
      alt: `Brewzo feed ${index + 1}`,
      type: path.toLowerCase().endsWith('.mp4') ? 'video' : 'image',
    }));

  return (
    <footer className="custom-footer-container">
      <div className="footer-top-wrapper">
        <div className="footer-top-section">
          <div className="footer-col brand-contact-col">
            <div className="brand-header">
              <h1>Brewzo India</h1>
               
            </div>

            <div className="contact-info-block">
             
              <div className="contact-details">
                 
                <div className="address-block">
                  <a className="visit-badge" href="https://maps.app.goo.gl/5MdMZMt6Arm5ubA66" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                VISIT US
              </a>
                  <p>E-4/68, arera colony, Bhopal, Madhya Pradesh</p>
                </div>
                <div className="social-block">
                  <p className="email-link">Pooja@brewzoindia.com</p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/people/Brewzo-cafe/61561075171099/">
                      <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/brewzoindia/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.swiggy.com/city/bhopal/brewzo-cafe-arera-colony-10-no-market-rest938705">
                      <SiSwiggy />
                    </a>
                    <a href="https://www.zomato.com/bhopal/brewzo-cafe-arera-colony">
                      <SiZomato />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-right-group">
            <div className="footer-links-wrap">
              <div className="footer-col links-col">
                <FooterDropdown title="COMPANY" links={companyLinks} defaultOpen />
              </div>

              <div className="footer-col links-col shop-col">
                <FooterDropdown title="SHOP" links={shopLinks} defaultOpen />
              </div>
            </div>

            <div className="spotify-col">
              <div className="playlist-card playlist-card--embed">
                <div className="spotify-embed-card">
                  <iframe
                    title="Brewzo Spotify playlist"
                    src="https://open.spotify.com/embed/playlist/2supAoPJgyanj1EDv7VV6E?utm_source=generator&theme=0"
                    width="100%"
                    height="328"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-marquee-section">
        <div className="doodle-area">
          <div className="doodle-graphic">
            <p>
              FOLLOW US
              <br />
              ON THE &apos;GRAM
            </p>
          </div>
        </div>

        <div className="marquee-container">
          <LogoLoop
            logos={brewzoFeedItems}
            speed={15}
            direction="left"
            logoHeight={110}
            gap={10}
            hoverSpeed={20}
            ariaLabel="Instagram feed"
            className="footer-logo-loop"
            renderItem={(item, key) => (
              <div key={key} className="footer-logo-loop__item" aria-label={item.alt}>
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    aria-label={item.alt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackGram;
                    }}
                  />
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>Â© 2026 BREWZO INDIA</span>
        <Link to="/site-credits" className="footer-bottom-bar__link">SITE CREDITS</Link>
      </div>
    </footer>
  );
};

export default BrewzoFooter;
