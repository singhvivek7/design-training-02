import { v4 as uuidv4 } from 'uuid';
import { CardProps } from '@/modules/components/Card';
import sixth from '@/assets/img/6.png';
import seventh from '@/assets/img/7.png';
import eight from '@/assets/img/8.png';

export const specialOffersCards: CardProps[] = [
  {
    id: uuidv4(),
    imgSrc: eight,
    description: 'Indulge in a Memorable One-Time Romantic Dinner for Two',
    price: 699,
    priceUnit: 'night',
    size: 2,
    title: 'Honeymoon',
    type: 'Room',
  },
  {
    id: uuidv4(),
    imgSrc: sixth,
    description:
      'Experience an Exclusively Private Environment to Boost Your Productivity',
    price: 999,
    priceUnit: 'night',
    size: 30,
    title: 'Meetings',
    type: 'Room',
  },
  {
    id: uuidv4(),
    imgSrc: seventh,
    description: 'Indulge in a Memorable One-Time Romantic Dinner for Two',
    price: 499,
    priceUnit: 'table',
    size: 2,
    title: 'Romantic Dining',
    type: 'Dining',
  },
];
