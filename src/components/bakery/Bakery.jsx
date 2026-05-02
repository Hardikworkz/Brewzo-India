import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ModalDrop from '../ui/modal-drop';
import LogoLoop from '../footer/LogoLoop';
import './Bakery.css';
import producerHighlightTwo from '../../assets/brewzoo/images/producer-highlight-2.jpg';

const boardData = [
  {
    id: 1,
    date: '04. 03. 2026',
    title: 'Producer Highlight: Burundi Coffee',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Sourcing coffee in Burundi is as much about relationships and resilience as it is about flavor. When Ben and Kristy Carlson arrived in 2011, they witnessed...',
    theme: 'caramel',
    btnLabel: 'READ MORE'
  },
  {
    id: 2,
    date: '03. 03. 2026',
    title: 'Producer Highlight',
    image: producerHighlightTwo,
    description:
      'In the hills of Las Flores, Santa Barbara, Honduras, 46 year old producer Isaias Fernandez tends to his 10 hectare farm, Finca el Ocotillo...',
    theme: 'amber',
    btnLabel: 'READ MORE'
  },
  {
    id: 3,
    date: '12. 11. 2025',
    title: 'Spotify Fall and Winter Playlist',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800',
    description: 'Featuring tracks from our current vinyl selection!',
    theme: 'terracotta',
    btnLabel: 'LISTEN NOW'
  },
  {
    id: 4,
    date: '11. 21. 2025',
    title: 'Follow us on Spotify',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800',
    description:
      "You can now follow us on Spotify! We'll never stop loving to play vinyl in the shops but we're excited to create some playlists inspired by our baristas...",
    theme: 'slate',
    btnLabel: 'LISTEN NOW'
  },
  {
    id: 1,
    date: '04. 03. 2026',
    title: 'Producer Highlight: Burundi Coffee',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Sourcing coffee in Burundi is as much about relationships and resilience as it is about flavor. When Ben and Kristy Carlson arrived in 2011, they witnessed...',
    theme: 'caramel',
    btnLabel: 'READ MORE'
  },
  {
    id: 2,
    date: '03. 03. 2026',
    title: 'Producer Highlight',
    image: producerHighlightTwo,
    description:
      'In the hills of Las Flores, Santa Barbara, Honduras, 46 year old producer Isaias Fernandez tends to his 10 hectare farm, Finca el Ocotillo...',
    theme: 'amber',
    btnLabel: 'READ MORE'
  },
  {
    id: 3,
    date: '12. 11. 2025',
    title: 'Spotify Fall and Winter Playlist',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800',
    description: 'Featuring tracks from our current vinyl selection!',
    theme: 'terracotta',
    btnLabel: 'LISTEN NOW'
  },
  {
    id: 4,
    date: '11. 21. 2025',
    title: 'Follow us on Spotify',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800',
    description:
      "You can now follow us on Spotify! We'll never stop loving to play vinyl in the shops but we're excited to create some playlists inspired by our baristas...",
    theme: 'slate',
    btnLabel: 'LISTEN NOW'
  }
];

const bakeryCarouselImages = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', alt: 'Coffee setup' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80', alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80', alt: 'Coffee pour' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80', alt: 'Coffee beans' },
  { src: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=900&q=80', alt: 'Cafe counter' },
  { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80', alt: 'Coffee mood' },
  { src: 'https://images.unsplash.com/photo-1501747315-124a0eaca060?auto=format&fit=crop&w=900&q=80', alt: 'Roastery' },
];

export default function Bakery() {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (item) => {
    setActiveCard(item);
  };

  const closeModal = () => {
    setActiveCard(null);
  };

  const handleActionKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(item);
    }
  };

  return (
    <div className="brewzo-container">
      <header className="board-header">
        <div className="header-text">
          <span className="title-accent">Brewzo&apos;s Breeze:</span>
          <h1 className="title-main">What&apos;s Cookin&apos; in Our World</h1>
        </div>
        <div className="nav-arrows">
          <button onClick={() => scroll('left')}><ChevronLeft size={16} /></button>
          <button onClick={() => scroll('right')}><ChevronRight size={16} /></button>
        </div>
      </header>

      <div className="board-scroll-grid" ref={scrollRef}>
        {boardData.map((item, index) => (
          <div key={`${item.id}-${index}`} className="board-card" data-theme={item.theme}>
            <div className="card-image-box">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-info">
              <h3 className="card-date">{item.date}</h3>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <div className="card-action">
                <span
                  className="action-tag"
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(item)}
                  onKeyDown={(event) => handleActionKeyDown(event, item)}
                >
                  {item.btnLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalDrop
        isOpen={Boolean(activeCard)}
        onClose={closeModal}
        title={activeCard?.title}
        subtitle={activeCard?.date}
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
                <p className="modal-card-copy">{activeCard.description}</p>
              </div>
            </div>

            <div className="modal-inline-carousel">
              <LogoLoop
                logos={bakeryCarouselImages}
                speed={38}
                gap={12}
                logoHeight={84}
                fadeOut
                fadeOutColor="#fff9f2"
                ariaLabel="Bakery story images"
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
    </div>
  );
}
