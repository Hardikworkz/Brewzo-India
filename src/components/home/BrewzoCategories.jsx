import { useEffect, useState } from 'react';
import { brewzoCategoryCards } from './brewzoHomeData';
import './BrewzoCategories.css';

export default function BrewzoCategories() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [slideIndexes, setSlideIndexes] = useState(
    () =>
      Object.fromEntries(
        brewzoCategoryCards.map((card) => [card.id, 0])
      )
  );

  const activeCard = brewzoCategoryCards.find((card) => card.id === activeCardId) ?? null;

  useEffect(() => {
    if (!activeCard) {
      document.body.classList.remove('brewzo-modal-open');
      return undefined;
    }

    document.body.classList.add('brewzo-modal-open');

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveCardId(null);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('brewzo-modal-open');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeCard]);

  const updateSlide = (cardId, direction) => {
    const card = brewzoCategoryCards.find((item) => item.id === cardId);
    if (!card) {
      return;
    }

    setSlideIndexes((current) => {
      const nextIndex =
        (current[cardId] + direction + card.gallery.length) % card.gallery.length;

      return {
        ...current,
        [cardId]: nextIndex
      };
    });
  };

  return (
    <section className="brewzo-categories" aria-label="Brewzo categories">
      <div className="brewzo-categories__inner">
        <h2 className="brewzo-categories__title">
          <span>Brewzo&apos;s Breeze:</span>
          What&apos;s Cookin&apos; in Our World
        </h2>

        <div className="brewzo-categories__grid">
          {brewzoCategoryCards.map((card) => (
            <article
              key={card.id}
              className={`brewzo-category-card brewzo-category-card--${card.theme}`}
            >
              <button
                type="button"
                className="brewzo-category-card__trigger"
                onClick={() => setActiveCardId(card.id)}
              >
                <img
                  className="brewzo-category-card__image"
                  src={card.previewImage}
                  alt={card.title}
                />
                <h3 className="brewzo-category-card__title">{card.title}</h3>
              </button>
            </article>
          ))}
        </div>

        <p className="brewzo-categories__note">
          Freshly made, full of flavor, and crafted with love because you deserve
          the real stuff.
        </p>
      </div>

      {activeCard && (
        <div
          className="brewzo-categories__overlay"
          role="presentation"
          onClick={() => setActiveCardId(null)}
        >
          <article
            className={`brewzo-categories__dialog brewzo-categories__dialog--${activeCard.theme}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`brewzo-category-${activeCard.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="brewzo-categories__close"
              onClick={() => setActiveCardId(null)}
            >
              back
            </button>

            <div className="brewzo-categories__dialog-grid">
              <div className="brewzo-categories__copy">
                <h3 id={`brewzo-category-${activeCard.id}`}>{activeCard.title}</h3>
                <p>{activeCard.summary}</p>
              </div>

              <div className="brewzo-categories__slider">
                <button
                  type="button"
                  className="brewzo-categories__slider-btn"
                  aria-label={`Previous ${activeCard.title} image`}
                  onClick={() => updateSlide(activeCard.id, -1)}
                >
                  &lt;
                </button>

                <div className="brewzo-categories__slider-window">
                  <div
                    className="brewzo-categories__slider-track"
                    style={{
                      transform: `translateX(-${slideIndexes[activeCard.id] * 100}%)`
                    }}
                  >
                    {activeCard.gallery.map((image) => (
                      <img key={image.src} src={image.src} alt={image.alt} />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="brewzo-categories__slider-btn"
                  aria-label={`Next ${activeCard.title} image`}
                  onClick={() => updateSlide(activeCard.id, 1)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
