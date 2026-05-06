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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState({
    type: 'idle',
    message: ''
  });

  const reviewApiUrl = `${
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
  }/api/reviews`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value
    }));

    if (submitFeedback.type !== 'idle') {
      setSubmitFeedback({
        type: 'idle',
        message: ''
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitFeedback({
      type: 'idle',
      message: ''
    });

    try {
      const response = await fetch(reviewApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || 'We could not submit your review right now.');
      }

      setFormState(initialFormState);
      setSubmitFeedback({
        type: 'success',
        message: payload.message || 'Thanks for sharing your Brewzo experience.'
      });
    } catch (error) {
      setSubmitFeedback({
        type: 'error',
        message: error.message || 'We could not submit your review right now.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="brewzo-review-page" aria-label="Submit your review">
      <div className="brewzo-review-page__shell">
        <div className="brewzo-review-page__form-panel">
          <div className="brewzo-review-page__form-wrap">
             
            <h1 className="brewzo-review-page__title">Tell Us Your Thoughts</h1>

            <form className="brewzo-review-form" onSubmit={handleSubmit}>
              <label>
                <span className="brewzo-review-form__label-text">
                  Name <span className="brewzo-review-form__required">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                <span className="brewzo-review-form__label-text">
                  Email <span className="brewzo-review-form__required">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                <span className="brewzo-review-form__label-text">
                  Message <span className="brewzo-review-form__required">*</span>
                </span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </label>

              <button className="brewzo-review-form__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {submitFeedback.type !== 'idle' && (
              <p
                className={`brewzo-review-form__feedback brewzo-review-form__feedback--${submitFeedback.type}`}
                aria-live="polite"
              >
                {submitFeedback.message}
              </p>
            )}
          </div>
        </div>

        <div className="brewzo-review-page__image-panel">
          <div className="brewzo-review-page__image-container">
            <img
              src={reviewImage}
              alt="Customers enjoying coffee at Brewzo"
              className="brewzo-review-page__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
