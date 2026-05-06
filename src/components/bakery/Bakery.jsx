import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ModalDrop from '../ui/modal-drop';
import LogoLoop from '../footer/LogoLoop';
import './Bakery.css';
import coffeeImage from '../../assets/brewzoo/images/coffee.jpeg';
import doodle from '../../assets/bakery-doodle.png';


const boardData = [
  {
    id: 1,
    date: 'BREWZO CAFE MENU',
    title: 'Coffee',
    image: coffeeImage,
    description:
      'Discover premium cafe coffee at Brewzo with bold espresso, smooth cold brews, hand brews, and signature specialty cups crafted for everyday coffee lovers.',
    theme: 'caramel',
    btnLabel: 'EXPLORE'
  },
  {
    id: 2,
    date: 'BREWZO CAFE MENU',
    title: 'All Day',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800',
    description:
      'Explore Brewzo all day cafe dining with masala omelette, avocado toast, poached egg sourdough, sunny side up, bhurji bunwich, banana oat pancakes, fresh salads, and gourmet veggie burgers crafted for indulgent brunch cravings.',
    theme: 'amber',
    btnLabel: 'EXPLORE'
  },
  {
    id: 3,
    date: 'BREWZO CAFE MENU',
    title: 'Mains',
    image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=800',
    description:
      'Explore Brewzo mains with cheesy wraps, pesto veggie wraps, grilled paneer sandwiches, creamy coleslaw toasties, handcrafted pasta bowls, and sourdough club sandwiches designed for satisfying cafe lunches and hearty evening bites.',
    theme: 'terracotta',
    btnLabel: 'EXPLORE'
  },
  {
    id: 4,
    date: 'BREWZO CAFE MENU',
    title: 'Sides',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=800',
    description:
      'Discover Brewzo sides with garlic toast, cheese garlic bread, pesto basil toast, loaded fries, potato wedges, fresh smoothies, house-baked desserts, and nostalgic 90s jam pairings made for indulgent cafe snacking.',
    theme: 'slate',
    btnLabel: 'EXPLORE'
  },
  {
    id: 5,
    date: 'BREWZO CAFE MENU',
    title: 'Platter',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    description:
      'Choose Brewzo platters for curated cafe combos like The Saucy Scene, The Brunch Ritual, The Chill Hustler, and The Zen Bite, pairing pasta, pancakes, guacamole, wraps, burgers, fries, and handcrafted beverages in one satisfying spread.',
    theme: 'amber',
    btnLabel: 'EXPLORE'
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

const coffeeCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=80',
    alt: 'Americano'
  },
  {
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
    alt: 'Cappuccino'
  },
  {
    src: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=80',
    alt: 'Double Espresso'
  },
  {
    src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=900&q=80',
    alt: 'Latte'
  },
  {
    src: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80',
    alt: 'Mocha'
  },
  {
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    alt: 'Salt Pistachio'
  },
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    alt: 'Signature Affogato'
  },
  {
    src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=900&q=80',
    alt: 'Spiced Cinnamon Mocha'
  },
  {
    src: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    alt: 'V60 Pour Over'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    alt: 'Moka Pot'
  },
  {
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
    alt: 'Aeropress'
  },
  {
    src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    alt: 'Peach Ice Tea'
  },
  {
    src: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80',
    alt: 'Jamun Kala Khatta'
  },
  {
    src: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=80',
    alt: 'Summer Berries'
  },
  {
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Lychee Rose'
  },
  {
    src: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=900&q=80',
    alt: 'Guava Chili'
  },
  {
    src: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80',
    alt: 'Peach Sunrise'
  },
  {
    src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    alt: 'Mojito'
  },
  {
    src: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80',
    alt: 'Passion Fruit'
  },
  {
    src: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    alt: 'Hibiscus Ice Tea'
  },
  {
    src: 'https://images.unsplash.com/photo-1553787499-6f913324e6c8?auto=format&fit=crop&w=900&q=80',
    alt: 'Oreo Crumble Shake'
  },
  {
    src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    alt: 'Muddy Nutella Shake'
  },
  {
    src: 'https://images.unsplash.com/photo-1619158401201-8fa932695178?auto=format&fit=crop&w=900&q=80',
    alt: 'KitKat Shake'
  },
  {
    src: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80',
    alt: 'Banana Shake'
  }
];

const allDayCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=900&q=80',
    alt: 'Masala Omelette'
  },
  {
    src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80',
    alt: 'Avocado Toast'
  },
  {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
    alt: 'Avocado Toast with Poached Egg'
  },
  
  {
    src: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=900&q=80',
    alt: 'Cheese Omelette'
  },
  {
    src: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80',
    alt: 'Sunny Side Up'
  },
  {
    src: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80',
    alt: 'Bhurji Bunwich'
  },
  {
    src: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
    alt: 'Banana Oat Pancakes'
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    alt: 'Cucumber Salad'
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    alt: 'Aloo Sesame Crunch Burger'
  },
  {
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    alt: 'Beetroot Burger'
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FybGljJTIwdG9hc3RlZCUyMGJyZWFkfGVufDB8fDB8fHww',
    alt: 'Toasted Bread'
  },
  {
    src: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FybGljJTIwdG9hc3RlZCUyMGJyZWFkfGVufDB8fDB8fHww',
    alt: 'Garlic Bread Toast'
  }
];

const mainsCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80',
    alt: 'Classic Cheese Wrap'
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    alt: 'Pesto Veggie Wrap'
  },
  {
    src: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80',
    alt: 'Grilled Paneer Wrap'
  },
  {
    src: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80',
    alt: 'Coleslaw Sandwich'
  },
  {
    src: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80',
    alt: 'Grill Cheese Sandwich'
  },
  {
    src: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=900&q=80',
    alt: 'Grilled Paneer Sandwich'
  },
  {
    src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    alt: 'Rosa Pasta'
  },
  {
    src: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=900&q=80',
    alt: 'Marinara Spaghetti'
  },
  {
    src: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80',
    alt: 'Aglio Olio Pasta'
  },
  {
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
    alt: 'Alfredo Pasta'
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    alt: 'Tex Mex Delight Club Sandwich'
  },
  {
    src: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=900&q=80',
    alt: 'Mediterranean Pesto Club'
  }
];

const sidesCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1760731755984-442f86f9b744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FybGljJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D',
    alt: 'Garlic Toast'
  },
  {
    src: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?auto=format&fit=crop&w=900&q=80',
    alt: 'Cheese Garlic Bread'
  },
  {
    src: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80',
    alt: 'Garlic Bread Exotica'
  },
  {
    src:  'https://images.unsplash.com/photo-1556008531-57e6eefc7be4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVzdG8lMjBCYXNpbCUyMEdhcmxpYyUyMFRvYXN0fGVufDB8fDB8fHww',
    alt: 'Pesto Basil Garlic Toast'
  },
  {
    src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
    alt: 'Classic Fries'
  },
  {
    src: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=80',
    alt: 'Chipotle Fries'
  },
  {
    src: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80',
    alt: 'Peri Peri Fries'
  },
  {
    src: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80',
    alt: 'Cheese Fries'
  },
  {
    src: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=900&q=80',
    alt: 'Potato Wedges'
  },
  {
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    alt: 'Pineapple Jam'
  },
  {
    src: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80',
    alt: 'Mix Berries Jam'
  },
  {
    src: 'https://images.unsplash.com/photo-1616269267068-a94048945ded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hvY29sYXRlJTIwQmFuYW5hJTIwU21vb3RoaWV8ZW58MHx8MHx8fDA%3D',
    alt: 'Chocolate Banana Smoothie'
  },
  {
    src: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80',
    alt: 'Banana Beetroot Smoothie'
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    alt: 'Banana Bread'
  },
  {
    src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80',
    alt: 'Cinnamon Roll'
  },
  {
    src: 'https://images.unsplash.com/photo-1612366747681-e4ca6992b1e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JvaXNzYW50fGVufDB8fDB8fHww',
    alt: 'Croissant'
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    alt: 'Cookies'
  }
];

const platterCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
    alt: 'The Saucy Scene platter'
  },
  {
    src: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    alt: 'Classic fries platter side'
  },
  {
    src: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
    alt: 'The Brunch Ritual platter'
  },
  {
    src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80',
    alt: 'Guacamole and artisanal bread'
  },
  {
    src: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80',
    alt: 'Half fry brunch plate'
  },
  {
    src: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=900&q=80',
    alt: 'The Chill Hustler wrap platter'
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    alt: 'Burger and wedges platter'
  },
  {
    src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
    alt: 'Mocktail platter pairing'
  },
  {
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    alt: 'Specialty coffee platter pairing'
  },
  {
    src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80',
    alt: 'The Zen Bite platter'
  }
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

  const activeCarouselImages =
    activeCard?.title === 'Coffee'
      ? coffeeCarouselImages
      : activeCard?.title === 'All Day'
        ? allDayCarouselImages
        : activeCard?.title === 'Mains'
          ? mainsCarouselImages
        : activeCard?.title === 'Sides'
          ? sidesCarouselImages
          : activeCard?.title === 'Platter'
            ? platterCarouselImages
        : bakeryCarouselImages;

  return (
    <div className="brewzo-container">
      <header className="board-header">
        <div className="heading">
          <div className="header-text">
          <span className="title-accent">Brewzo&apos;s Breeze:</span>
          <h1 className="title-main">What&apos;s Cookin&apos; in Our World</h1>
        </div>
        <img src={doodle} alt="" />
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
                logos={activeCarouselImages}
                speed={38}
                gap={12}
                logoHeight={84}
                fadeOut
                fadeOutColor="#fff9f2"
                ariaLabel={`${activeCard.title} story images`}
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
