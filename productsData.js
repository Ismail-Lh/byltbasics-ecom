import { v4 as uuidv4 } from 'uuid';

export const addDataBase = firebase => {
  const dataBase = firebase.firestore();
  /* men
    ============================================ */

  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'drop-cuts: lux',
  //   collections: 'mens-tops',
  //   price: 28990,
  //   description: 'Cool touch, high-cotton LUX Blend fabric.',
  //   images: ['1'],
  //   colors: ['subtle'],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: true },
  //     { size: 'xxl', isAvailable: true },
  //     { size: 'xxxl', isAvailable: false },
  //   ],
  //   stock: 25,
  // popularity: true
  // });

  /* women
    ============================================ */
  // dataBase.collection('women').add({
  //   id: uuidv4(),
  //   name: 'the bylt crop top',
  //   collections: 'womens-tops',
  //   price: 38990,
  //   discountPer: 30,
  //   description:
  //     'Figure forming with full coverage. Please Note - This Item is EXCHANGE ONLY and not eligible for return',
  //   images: ['1'],
  //   colors: ['grey'],
  //   sizes: [
  //     { size: 'xs', isAvailable: true },
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //   ],
  //   stock: 10,
  //   popularity: true
  // });
};
