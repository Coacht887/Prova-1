// src/products/products.js

import shopping from '../assets/shopping.webp';

const products = [
  {
    id: 1,
    title: 'Auricolari Bluetooth Noise Cancelling',
    description: 'Qualità audio eccezionale, cancellazione attiva del rumore e durata di 24h.',
    price: 89.99,
    image: shopping,
  },
  {
    id: 2,
    title: 'Cuffie Wireless Over-Ear',
    description: 'Comfort tutto il giorno con un suono cristallino.',
    price: 129.99,
    image: shopping,
  },
  {
    id: 3,
    title: 'Speaker Bluetooth Portatile',
    description: 'Bassi potenti e batteria a lunga durata.',
    price: 59.99,
    image: shopping,
  }
];

export const getAllProducts = () => products;