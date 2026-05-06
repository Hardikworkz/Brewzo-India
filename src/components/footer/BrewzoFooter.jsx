import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BrewzoFooter.css';
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaEllipsisH,
} from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';
import { SiSwiggy, SiZomato } from 'react-icons/si';
import LogoLoop from './LogoLoop';

const companyLinks = [
  { href: '#about', label: 'About' },
  { href: '#Reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
  {href: "#Events", label: "Events"}
];

const shopLinks = [
  { href: '#coffee', label: 'Coffee' },
  { href: '#Beans', label: 'Beans' },
  { href: '#Bakery', label: 'Bakery' },
  { href: '#Muffins', label: 'Muffins' },
  { href: '#Croissant', label: 'Croissant' },
];

const playlistTracks = [
  {
    id: 1,
    title: 'Atmosphere - 2020 Digital R...',
    artist: 'Joy Division',
    duration: '04:12',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    explicit: false,
  },
  {
    id: 2,
    title: 'BUFFALO (feat. Shane Powers)',
    artist: 'Tyler, The Creator',
    duration: '02:39',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    explicit: true,
  },
  {
    id: 3,
    title: 'Right Back to It',
    artist: 'Waxahatchee',
    duration: '04:33',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    explicit: false,
  },
];

function FooterDropdown({ title, links, defaultOpen = false }) {
  return (
    <details className="footer-dropdown" open={defaultOpen}>
      <summary>{title}</summary>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </details>
  );
}

const BrewzoFooter = () => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const fallbackGram =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Crect width='110' height='110' fill='%23d8b08f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='11' fill='%23503326'%3EBrewzo Feed%3C/text%3E%3C/svg%3E";

  const rollingImages = [
    '/images/gram1.jpg',
    '/images/gram2.jpg',
    '/images/gram3.jpg',
    '/images/gram4.jpg',
    '/images/gram5.jpg',
    '/images/gram6.jpg',
    '/images/gram7.jpg',
    '/images/gram8.jpg',
  ];

  const gramLogos = rollingImages.map((src, index) => ({
    src,
    alt: `Instagram feed ${index + 1}`,
  }));

  const currentTrack = useMemo(
    () => playlistTracks[currentTrackIndex],
    [currentTrackIndex]
  );

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    audio.pause();
  }, [currentTrackIndex, isPlaying]);

  const handleTrackSelect = (index) => {
    if (index === currentTrackIndex) {
      setIsPlaying((prev) => !prev);
      return;
    }

    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? playlistTracks.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlistTracks.length);
    setIsPlaying(true);
  };

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
              <div className="playlist-card">
                <div className="playlist-top">
                  <div className="playlist-cover-grid">
                    <span className="cover cover-one">
                      <img
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop"
                        alt=""
                      />
                    </span>
                    <span className="cover cover-two">
                      <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"
                        alt=""
                      />
                    </span>
                    <span className="cover cover-three">
                      <img
                        src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop"
                        alt=""
                      />
                    </span>
                    <span className="cover cover-four">
                      <img
                        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400"
                        alt=""
                      />
                    </span>
                  </div>

                  <div className="playlist-main">
                    <div className="playlist-meta">
                      <h3>FW 2025</h3>
                      <p>Brewzo India</p>
                    </div>
                    <div className="playlist-save">
                      <IoAddCircleOutline />
                      <span>Save on Spotify</span>
                    </div>
                  </div>

                  <div className="playlist-spotify">
                    <FaSpotify />
                  </div>
                </div>

                <div className="playlist-controls-row">
                  <span className="preview-pill">Preview</span>
                  <div className="playlist-controls">
                    <button
                      type="button"
                      className="playlist-icon-button"
                      onClick={handlePreviousTrack}
                      aria-label="Previous track"
                    >
                      <FaStepBackward />
                    </button>
                    <button
                      type="button"
                      className="playlist-icon-button"
                      onClick={handleNextTrack}
                      aria-label="Next track"
                    >
                      <FaStepForward />
                    </button>
                    <div className="playlist-dots">
                      <FaEllipsisH />
                    </div>
                    <button
                      type="button"
                      className="play-button"
                      onClick={() => setIsPlaying((prev) => !prev)}
                      aria-label={isPlaying ? 'Pause playlist' : 'Play playlist'}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>

                <div className="playlist-tracklist">
                  {playlistTracks.map((track, index) => (
                    <button
                      key={track.id}
                      type="button"
                      className={`track-row${index === currentTrackIndex ? ' track-row-active' : ''}`}
                      onClick={() => handleTrackSelect(index)}
                    >
                      <span className="track-number">{track.id}</span>
                      <div className="track-copy">
                        <p>{track.title}</p>
                        <div className="track-artist-row">
                          {track.explicit ? (
                            <span className="explicit-pill">E</span>
                          ) : null}
                          <span>{track.artist}</span>
                        </div>
                      </div>
                      <span className="track-duration">{track.duration}</span>
                    </button>
                  ))}
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
            logos={gramLogos}
            speed={15}
            direction="left"
            logoHeight={110}
            gap={10}
            hoverSpeed={20}
            ariaLabel="Instagram feed"
            className="footer-logo-loop"
            renderItem={(item, key) => (
              <div key={key} className="footer-logo-loop__item" aria-label={item.alt}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackGram;
                  }}
                />
              </div>
            )}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        preload="none"
        onEnded={handleNextTrack}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="footer-bottom-bar">
        <span>Â© 2026 BREWZO INDIA</span>
        <Link to="/site-credits" className="footer-bottom-bar__link">SITE CREDITS</Link>
      </div>
    </footer>
  );
};

export default BrewzoFooter;
