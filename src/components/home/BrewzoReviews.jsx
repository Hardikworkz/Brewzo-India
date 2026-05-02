import { Link } from 'react-router-dom';
import reviewBackground from '../../assets/brewzoo/images/review-bg.jpeg';
import { brewzoReviews } from './brewzoHomeData';
import './BrewzoReviews.css';

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
        <h2 className="brewzo-reviews__title">What Our Customers Say</h2>

        <div className="brewzo-reviews__list">
          {brewzoReviews.map((review) => (
            <article className="brewzo-reviews__card" key={review.name}>
              <div className="brewzo-reviews__card-top">
                <h3>{review.name}</h3>
                <span>{review.rating}</span>
              </div>
              <p>{`"${review.copy}"`}</p>
            </article>
          ))}
        </div>

        <p className="brewzo-reviews__cta-text">Have you visited Brewzo?</p>
        <Link to="/reviews" className="brewzo-reviews__cta-button">
          Share Your Experience
        </Link>
      </div>
    </section>
  );
}
