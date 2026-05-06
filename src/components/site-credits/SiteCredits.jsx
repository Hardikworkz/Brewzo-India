import BrewzoFooter from '../footer/BrewzoFooter';
import './SiteCredits.css';

export default function SiteCredits() {
  return (
    <>
      <section className="site-credits-page" aria-label="Site credits">
        <div className="site-credits-page__inner">
          <h1 className="site-credits-page__title">Site Credits</h1>

          <div className="site-credits-page__group">
            <p className="site-credits-page__label">Web Design &amp; Development(Inspired)</p>
            <a
              className="site-credits-page__name"
              href="mailto:workzhardik@gmail.com"
            >
              Hardik Lalwani
            </a>
            <p className="site-credits-page__name site-credits-page__name--secondary">
              Shreya Jain
            </p>
          </div>
        </div>
      </section>
      <BrewzoFooter />
    </>
  );
}
