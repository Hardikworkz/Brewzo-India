import sectionImage from '../../assets/brewzoo/images/section-2.png';
import './BrewzoAbout.css';

export default function BrewzoAbout() {
  return (
    <section className="brewzo-about" aria-label="About Brewzo">
      <div className="brewzo-about__inner">
        <p className="brewzo-about__text">
          <span className="brewzo-about__highlight">Brewzo</span> is a warm, cozy
          coffee space built for slow mornings and meaningful moments. We serve
          freshly brewed, authentic coffee paired with in-house baked treats and
          perfectly crafted snacks. Whether you&apos;re here to work, unwind, or
          connect with friends, Brewzo is your everyday escape.
        </p>

        <div className="brewzo-about__image">
          <img src={sectionImage} alt="Brewzo coffee and treats" />
        </div>
      </div>
    </section>
  );
}
