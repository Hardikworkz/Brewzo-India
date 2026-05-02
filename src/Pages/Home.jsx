import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BrewzoAbout from '../components/home/BrewzoAbout';
import BrewzoBeans from '../components/home/BrewzoBeans';
import BrewzoCategories from '../components/home/BrewzoCategories';
import BrewzoHero from '../components/home/BrewzoHero';
import BrewzoReviews from '../components/home/BrewzoReviews';
import BrewzoStory from '../components/home/BrewzoStory';
import BrewzoFooter from '../components/footer/BrewzoFooter';
import './Home.css';
import BrewzoBakery from '../components/bakery/Bakery';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const scrollToHashSection = () => {
      const sectionElement = document.getElementById(sectionId);

      if (!sectionElement) {
        return;
      }

      const headerOffset = 76;
      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    };

    requestAnimationFrame(scrollToHashSection);
  }, [location.hash, location.pathname]);

  return (
    <div className="brewzo-home">
      <section id="home">
        <BrewzoHero />
      </section>
      <section id="about">
        <BrewzoAbout />
      </section>
       <section id="beans">
        <BrewzoBeans />
      </section>
       <section id="bakery">
        <BrewzoBakery />
      </section>
     
      <BrewzoStory />
      <section id="review">
        <BrewzoReviews />
      </section>
     
      <BrewzoFooter />
    </div>
  );
};

export default Home;
