import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './DemoHeader.css';
import logo from '../../assets/logo.png';

const ChevronIcon = () => (
  <svg className="chevron" viewBox="0 0 24 24" width="12" height="12">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

const DemoHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 8) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (!sectionElement) {
      return;
    }

    const headerOffset = 76;
    const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    window.history.replaceState(null, '', `/#${sectionId}`);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
      return;
    }

    navigate('/');
  };

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    scrollToSection(sectionId);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const handleMenuSectionClick = (event, sectionId) => {
    handleSectionClick(event, sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <section className="section1">
        <div className="nav-section brand-section">
          <a href="/" onClick={handleHomeClick}>
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="nav-section links-section">
          <a href="/#about" onClick={(event) => handleSectionClick(event, 'about')}>ABOUT</a>
          <a href="/#beans" onClick={(event) => handleSectionClick(event, 'beans')}>BEANS</a>
          <a href="/#bakery" onClick={(event) => handleSectionClick(event, 'bakery')}>BAKERY</a>
          <a href="/#review" onClick={(event) => handleSectionClick(event, 'review')}>REVIEW</a>
          <Link to="/events">EVENTS</Link>
        </div>
      </section>

      <div className="nav-section actions-section">
        <Link to="/reviews">CONTACT US</Link>
       
        <button
          type="button"
          className={`menu-toggle ${isMobileMenuOpen ? 'menu-toggle-open' : ''}`}
          onClick={handleMenuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="/#about" onClick={(event) => handleMenuSectionClick(event, 'about')}>ABOUT</a>
        <a href="/#beans" onClick={(event) => handleMenuSectionClick(event, 'beans')}>BEANS</a>
        <a href="/#bakery" onClick={(event) => handleMenuSectionClick(event, 'bakery')}>BAKERY</a>
        <a href="/#review" onClick={(event) => handleMenuSectionClick(event, 'review')}>REVIEW</a>
        <Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link>
      </div>
    </nav>
  );
};

export default DemoHeader;
