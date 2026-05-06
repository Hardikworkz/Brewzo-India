import beanOne from '../../assets/brewzoo/images/bean-1.jpeg';
import beanTwo from '../../assets/brewzoo/images/bean-2.jpeg';
import brewzoHeroImage from '../../assets/brewzoo/images/brewzo-hero.jpeg';
import cappuccinoImage from '../../assets/brewzoo/images/cappuccino.jpeg';
import coffeeImage from '../../assets/brewzoo/images/coffee.jpeg';
import coldBrewImage from '../../assets/brewzoo/images/cold-brew.jpeg';
import espressoImage from '../../assets/brewzoo/images/espresso.jpeg';
import latteImage from '../../assets/brewzoo/images/latte.jpeg';
import ourStoryImage from '../../assets/brewzoo/images/our-story.png';
import reviewMomentImage from '../../assets/brewzoo/images/review-2.jpeg';
import sectionImage from '../../assets/brewzoo/images/section-2.png';

export const brewzoCategoryCards = [
  {
    id: 'coffee',
    theme: 'coffee',
    title: 'coffee',
    summary:
      'Fresh pours, slow sips, and rich blends made for quiet mornings and long conversations.',
    previewImage: coffeeImage,
    gallery: [
      { src: espressoImage, alt: 'Espresso at Brewzo' },
      { src: latteImage, alt: 'Latte at Brewzo' },
      { src: coldBrewImage, alt: 'Cold brew at Brewzo' },
      { src: cappuccinoImage, alt: 'Cappuccino at Brewzo' }
    ]
  },
  {
    id: 'snacks',
    theme: 'snacks',
    title: 'snacks',
    summary: 'Crisp, savory bites that sit perfectly beside your favorite brew.',
    previewImage: sectionImage,
    gallery: [
      { src: sectionImage, alt: 'Snack pairing at Brewzo' },
      { src: brewzoHeroImage, alt: 'Warm snack spread at Brewzo' },
      { src: reviewMomentImage, alt: 'Guests enjoying snacks at Brewzo' },
      { src: ourStoryImage, alt: 'Cafe table spread at Brewzo' }
    ]
  },
  {
    id: 'bakery',
    theme: 'bakery',
    title: 'bakery',
    summary: 'Soft cakes, warm breads, and daily treats baked in-house.',
    previewImage: brewzoHeroImage,
    gallery: [
      { src: brewzoHeroImage, alt: 'Bakery counter at Brewzo' },
      { src: ourStoryImage, alt: 'Freshly baked treats at Brewzo' },
      { src: sectionImage, alt: 'Coffee and bakery pairings at Brewzo' },
      { src: cappuccinoImage, alt: 'Morning bakery and coffee ritual' }
    ]
  },
  {
    id: 'beans',
    theme: 'beans',
    title: 'beans',
    summary:
      'Thoughtfully roasted beans with cozy depth, soft aroma, and everyday warmth.',
    previewImage: beanOne,
    gallery: [
      { src: beanOne, alt: 'House roast beans at Brewzo' },
      { src: beanTwo, alt: 'Single origin beans at Brewzo' },
      { src: coffeeImage, alt: 'Freshly brewed Brewzo coffee' },
      { src: coldBrewImage, alt: 'Cold brew served at Brewzo' }
    ]
  }
];

export const brewzoBeansSection = {
  label: 'COFFEE BEANS',
  heading: 'Where Great Coffee Begins',
  description:
    'Our beans begin with careful sourcing and end in a cup worth slowing down for. Freshly roasted in-house, handpicked for quality, and crafted with intention, each blend brings together purity, aroma, and the kind of flavor you remember.'
};

export const brewzoBeans = [
  {
    title: 'House Roast',
    price: 'From Rs. 1,900.00',
    label: 'SMALL BATCH SIGNATURE BLEND',
    copy: 'Rich, balanced and roasted fresh in-house for everyday brews worth savoring.',
    image: beanOne,
    alt: 'House Roast coffee beans'
  },
  {
    title: 'Single Origin Select',
    price: 'From Rs. 2,200.00',
    label: 'LIMITED ROTATING ORIGINS',
    copy:
      'Handpicked seasonal beans with layered notes, bright aromas and remarkable character.',
    image: beanTwo,
    alt: 'Single Origin Select coffee beans'
  }
];

export const brewzoReviewsSection = {
  label: 'CUSTOMER REVIEWS',
  heading: 'Notes From The Neighborhood',
  description:
    'Real words from the people who stop by for their everyday coffee, slow conversations, fresh bakes, and Brewzo moments.',
  ctaText: 'Have you visited Brewzo?',
  ctaLabel: 'Share Your Experience'
};

export const brewzoReviews = [
  {
    name: 'Aanya Sharma',
    rating: '4.5 / 5',
    context: 'Everyday Coffee',
    copy:
      'Brewzo has become my everyday escape. The coffee, the vibe, everything just feels right.'
  },
  {
    name: 'Rohan Mehta',
    rating: '4.0 / 5',
    context: 'Work And Chill',
    copy:
      'Fresh coffee, great snacks, and a perfect place to work or just chill with friends.'
  },
  {
    name: 'Neha Kapoor',
    rating: '4.2 / 5',
    context: 'Bakery Picks',
    copy:
      'The in-house bakery is amazing. You can actually taste the quality in every bite.'
  },
  {
    name: 'Arjun Verma',
    rating: '5.0 / 5',
    context: 'Cafe Vibe',
    copy: "One of the coziest spots I've been to. Brewzo just gets the vibe right."
  }
];
