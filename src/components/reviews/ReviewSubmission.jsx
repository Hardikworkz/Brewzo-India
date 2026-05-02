import { useState } from 'react';
import reviewImage from '../../assets/brewzoo/images/review-2.jpeg';
import './ReviewSubmission.css';

const initialFormState = {
  name: '',
  email: '',
  message: ''
};

export default function ReviewSubmission() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormState(initialFormState);
  };

  return (
    <section className="brewzo-review-page" aria-label="Submit your review">
      <div className="brewzo-review-page__shell">
        <div className="brewzo-review-page__form-panel">
          <div className="brewzo-review-page__form-wrap">
            <h1 className="brewzo-review-page__title">Tell Us Your Thoughts</h1>

            <form className="brewzo-review-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button className="brewzo-review-form__submit" type="submit">
                Submit Review
              </button>
            </form>

            {isSubmitted && (
              <p className="brewzo-review-form__success">
                Thanks for sharing. Your Brewzo experience has been noted.
              </p>
            )}
          </div>
        </div>

        <div className="brewzo-review-page__image-panel">
          <img src={reviewImage} alt="Customers enjoying coffee at Brewzo" />
        </div>
      </div>
    </section>
  );
}
