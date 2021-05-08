import { v4 as uuidv4 } from 'uuid';

export const addDataBase = firebase => {
  const dataBase = firebase.firestore();
  /* men
    ============================================ */

  dataBase.collection('men').add({
    id: uuidv4(),
    name: 'drop-cuts lux',
    collections: 'mens-tops',
    category: 'tops',
    type: 'drop-cuts',
    price: 2899,
    description: 'Cool touch, high-cotton LUX Blend fabric.',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    colors: [
      'subtle',
      'white',
      'black',
      'heather grey',
      'forest',
      'stone',
      'navy',
      'maroon',
      'light heather grey',
      'dark heather grey',
      'sand',
      'olive',
      'charcoal',
      'atlantic',
      'moss',
      'mist',
      'pebble',
      'valencia',
    ],
    sizes: [
      { size: 's', isAvailable: true },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: true },
      { size: 'xl', isAvailable: true },
      { size: 'xxl', isAvailable: true },
      { size: 'xxxl', isAvailable: false },
    ],
    stock: 25,
    popularity: true,
  });

  /* women
    ============================================ */
  dataBase.collection('women').add({
    id: uuidv4(),
    name: 'the bylt crop top',
    collections: 'womens-tops',
    category: 'tops',
    type: 'crop top',
    price: 3899,
    discountPer: 30,
    description:
      'Figure forming with full coverage. Please Note - This Item is EXCHANGE ONLY and not eligible for return',
    images: ['1.jpg', '2.jpg', '3.jpg'],
    colors: ['grey', 'blush', 'black'],
    sizes: [
      { size: 'xs', isAvailable: true },
      { size: 's', isAvailable: true },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: true },
    ],
    stock: 10,
    popularity: true,
  });
};
