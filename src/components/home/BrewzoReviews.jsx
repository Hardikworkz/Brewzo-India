import { Link } from 'react-router-dom';
import reviewBackground from '../../assets/brewzoo/images/review-bg.jpeg';
import { brewzoReviews, brewzoReviewsSection } from './brewzoHomeData';
import './BrewzoReviews.css';
import doodle from '../../assets/review-doodle.png';


export default function BrewzoReviews() {
  return (
    <section
      className="brewzo-reviews"
      aria-label="Customer reviews"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(18, 12, 11, 0.54) 0%, rgba(18, 12, 11, 0.42) 100%), url(${reviewBackground})`
      }}
    >
      <div className="brewzo-reviews__overlay" />

      <div className="brewzo-reviews__content">
        <div className="brewzo-reviews__intro-row">
          <div className="brewzo-reviews__intro">
            <p className="brewzo-reviews__eyebrow">{brewzoReviewsSection.label}</p>
            <h2 className="brewzo-reviews__title">{brewzoReviewsSection.heading}</h2>
            <p className="brewzo-reviews__description">{brewzoReviewsSection.description}</p>
          </div>
          <img src={doodle} alt="Review doodle" className="brewzo-reviews__doodle" />
        </div>

        <div className="brewzo-reviews__carousel-wrap">
          <div className="brewzo-reviews__list">
            {brewzoReviews.map((review) => (
              <article className="brewzo-reviews__card" key={review.name}>
                <span className="brewzo-reviews__quote-mark">"</span>
                <div className="brewzo-reviews__card-top">
                  <div>
                    <h3>{review.name}</h3>
                    <p className="brewzo-reviews__context">{review.context}</p>
                  </div>
                  <span className="brewzo-reviews__rating">{review.rating}</span>
                </div>
                <p className="brewzo-reviews__copy">{review.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <Link to="/reviews" className="brewzo-reviews__cta-button">
          {brewzoReviewsSection.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
