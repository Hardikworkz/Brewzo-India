import React, { useRef, useEffect, useState } from 'react';
import ModalDrop from '../ui/modal-drop';
import LogoLoop from '../footer/LogoLoop';
import './EventsBoard.css';
import event1 from '../../assets/event1.png';
import event2 from '../../assets/event2.png';
import doodle from '../../assets/doodle_events.png';

const eventsData = [
  {
    id: 1,
    date: 'Brewzo Events',
    title: 'Run and Rave With',
    subtitle: 'Gen Run',
    description: 'A high-energy community run and rave-style coffee social hosted with Gen Run.',
    image: event1,
  },
  {
    id: 2,
    date: 'Brewzo Events',
    title: 'Candle Making Workshop',
    subtitle: 'Lavana Candles',
    description: 'A hands-on candle making experience in collaboration with Lavana Candles.',
    image: event2,
  },
  {
    id: 3,
    date: 'Brewzo Events',
    title: 'Open Mic',
    subtitle: 'Parkhi',
    description: 'An expressive open mic evening in partnership with Parkhi.',
    image: event1,
  },
  {
    id: 4,
    date: 'Brewzo Events',
    title: 'Brewing Sessions',
    subtitle: 'Coffee Craft',
    description: 'Interactive sessions focused on brewing techniques, flavor notes, and coffee craft.',
    image: event2,
  },
  {
    id: 5,
    date: 'Brewzo Events',
    title: 'Jamming',
    subtitle: 'Live Community',
    description: 'An open jamming experience with live music, conversations, and great brews.',
    image: event1,
  },
  {
    id: 6,
    date: 'Brewzo Events',
    title: 'Resin Art Workshop',
    subtitle: 'Creative Studio',
    description: 'A guided resin art workshop built for creators of all levels.',
    image: event2,
  },
];

const eventsCarouselImages = [
  { src: event1, alt: 'Event moment' },
  { src: event2, alt: 'Live performance' },
  { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80', alt: 'Creative session' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80', alt: 'Event crowd' },
  { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80', alt: 'Live stage lights' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80', alt: 'Audience vibes' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80', alt: 'Night event' },
];

const EventBoard = () => {
  const sliderRef = useRef(null);
  const modalCarouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (evt) => {
      evt.preventDefault();
      const delta =
        Math.abs(evt.deltaX) > Math.abs(evt.deltaY) ? evt.deltaX : evt.deltaY;

      if (delta === 0) {
        return;
      }

      slider.scrollBy({
        left: delta < 0 ? -300 : 300,
        behavior: 'smooth'
      });
    };

    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const modalCarousel = modalCarouselRef.current;
    if (!modalCarousel) return;

    const handleModalWheel = (evt) => {
      evt.preventDefault();
      const delta =
        Math.abs(evt.deltaX) > Math.abs(evt.deltaY) ? evt.deltaX : evt.deltaY;

      if (delta === 0) {
        return;
      }

      modalCarousel.scrollBy({
        left: delta < 0 ? -220 : 220,
        behavior: 'smooth'
      });
    };

    modalCarousel.addEventListener('wheel', handleModalWheel, { passive: false });

    return () => {
      modalCarousel.removeEventListener('wheel', handleModalWheel);
    };
  }, [activeCard]);

  const closeModal = () => {
    setActiveCard(null);
  };

  return (
    <section className="event-board-hero">
      <div className="content-panel">
        <div className="intro-header">
          <div className="intro-desc">
            <span className="badge">Events</span>
            <h2>When Coffee Meets Character</h2>
            <p>
              Your all-access pass to the city&apos;s best happenings. Keep your
              calendar fresh and discover exclusive gatherings, live music, and
              creative workshops.
            </p>
          </div>
          <div className="intro-img">
            <img src={doodle} alt="" />
          </div>
        </div>

        <div className="card-slider" ref={sliderRef}>
          {eventsData.map((event) => (
            <div className="event-card" key={event.id}>
              <div className="card-image-wrapper">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{event.title}</h3>
                </div>
                <span className="subtitle">{event.subtitle}</span>
                <p>{event.description}</p>
                <button
                  className="btn-quick-view"
                  type="button"
                  onClick={() => setActiveCard(event)}
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalDrop
        isOpen={Boolean(activeCard)}
        onClose={closeModal}
        title={activeCard?.title}
        subtitle={activeCard?.subtitle}
        type="blur"
        animationType="scale"
      >
        {activeCard && (
          <>
            <div className="modal-card-top">
              <div className="modal-card-media modal-card-media--split">
                <img src={activeCard.image} alt={activeCard.title} />
              </div>
              <div className="modal-card-details">
                <p className="modal-card-date">{activeCard.date}</p>
                <p className="modal-card-copy">{activeCard.description}</p>
              </div>
            </div>

            <div className="modal-inline-carousel" ref={modalCarouselRef}>
              <LogoLoop
                logos={eventsCarouselImages}
                speed={42}
                gap={12}
                logoHeight={84}
                fadeOut
                fadeOutColor="#fff9f2"
                ariaLabel="Event gallery images"
                renderItem={(item, key) => (
                  <div className="modal-carousel-item" key={key}>
                    <img src={item.src} alt={item.alt} />
                  </div>
                )}
              />
            </div>
          </>
        )}
      </ModalDrop>
    </section>
  );
};

export default EventBoard;
