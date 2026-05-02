import React, { useEffect, useMemo, useRef, useState } from 'react';
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
    media: [
      { type: 'image', src: '/events-media/event-image-01.jpg', alt: 'Run and Rave moment 1' },
      { type: 'image', src: '/events-media/event-image-02.jpg', alt: 'Run and Rave moment 2' },
      { type: 'video', src: '/events-media/event-video-01.mp4', alt: 'Run and Rave video 1' },
      { type: 'video', src: '/events-media/event-video-02.mp4', alt: 'Run and Rave video 2' },
    ],
  },
  {
    id: 2,
    date: 'Brewzo Events',
    title: 'Candle Making Workshop',
    subtitle: 'Lavana Candles',
    description: 'A hands-on candle making experience in collaboration with Lavana Candles.',
    image: event2,
    media: [
      { type: 'image', src: '/events-media/event-image-03.jpg', alt: 'Candle workshop moment 1' },
      { type: 'image', src: '/events-media/event-image-04.jpg', alt: 'Candle workshop moment 2' },
      { type: 'video', src: '/events-media/event-video-03.mp4', alt: 'Candle workshop video' },
    ],
  },
  {
    id: 3,
    date: 'Brewzo Events',
    title: 'Open Mic',
    subtitle: 'Parkhi',
    description: 'An expressive open mic evening in partnership with Parkhi.',
    image: event1,
    media: [
      { type: 'image', src: '/events-media/event-image-05.jpg', alt: 'Open mic moment 1' },
      { type: 'image', src: '/events-media/event-image-06.jpg', alt: 'Open mic moment 2' },
      { type: 'video', src: '/events-media/event-video-04.mp4', alt: 'Open mic video' },
    ],
  },
  {
    id: 4,
    date: 'Brewzo Events',
    title: 'Brewing Sessions',
    subtitle: 'Coffee Craft',
    description: 'Interactive sessions focused on brewing techniques, flavor notes, and coffee craft.',
    image: event2,
    media: [
      { type: 'image', src: '/events-media/event-image-07.jpg', alt: 'Brewing session moment' },
      { type: 'video', src: '/events-media/event-video-05.mp4', alt: 'Brewing session video 1' },
      { type: 'video', src: '/events-media/event-video-06.mp4', alt: 'Brewing session video 2' },
    ],
  },
  {
    id: 5,
    date: 'Brewzo Events',
    title: 'Jamming',
    subtitle: 'Live Community',
    description: 'An open jamming experience with live music, conversations, and great brews.',
    image: event1,
    media: [
      { type: 'image', src: '/events-media/event-image-08.jpg', alt: 'Jamming moment 1' },
      { type: 'image', src: '/events-media/event-image-09.jpg', alt: 'Jamming moment 2' },
      { type: 'video', src: '/events-media/event-video-07.mp4', alt: 'Jamming video' },
    ],
  },
  {
    id: 6,
    date: 'Brewzo Events',
    title: 'Resin Art Workshop',
    subtitle: 'Creative Studio',
    description: 'A guided resin art workshop built for creators of all levels.',
    image: event2,
    media: [
      { type: 'image', src: '/events-media/event-image-10.jpg', alt: 'Resin art workshop moment' },
      { type: 'video', src: '/events-media/event-video-08.mp4', alt: 'Resin art workshop video' },
      { type: 'image', src: '/events-media/event-image-01.jpg', alt: 'Resin art detail' },
    ],
  },
];

const buildLoopMedia = (mediaItems) => {
  if (!mediaItems?.length) {
    return [];
  }

  let repeatCount = 1;
  if (mediaItems.length <= 3) {
    repeatCount = 3;
  } else if (mediaItems.length <= 5) {
    repeatCount = 2;
  }

  return Array.from({ length: repeatCount }, (_, copyIndex) =>
    mediaItems.map((item, itemIndex) => ({
      ...item,
      key: `${copyIndex}-${itemIndex}-${item.src}`,
    }))
  ).flat();
};

const EventBoard = () => {
  const sliderRef = useRef(null);
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

  const popupLoopMedia = useMemo(
    () => buildLoopMedia(activeCard?.media ?? []),
    [activeCard]
  );

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

            <div className="modal-inline-carousel event-popup-media-track">
              <LogoLoop
                logos={popupLoopMedia}
                speed={34}
                gap={12}
                logoHeight={84}
                fadeOut
                fadeOutColor="#fff9f2"
                ariaLabel={`${activeCard.title} gallery`}
                renderItem={(item, key) => (
                  <div className="modal-carousel-item event-popup-media-item" key={item.key ?? key}>
                    {item.type === 'video' ? (
                      <video
                        className="event-popup-media-video"
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        onPause={(event) => {
                          event.currentTarget.play().catch(() => {});
                        }}
                      />
                    ) : (
                      <img src={item.src} alt={item.alt} />
                    )}
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
