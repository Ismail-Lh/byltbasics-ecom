import { v4 as uuidv4 } from 'uuid';

export const addDataBase = firebase => {
  const dataBase = firebase.firestore();
  /* men
    ============================================ */

  // Category: Tops
  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'drop-cut lux',
  //   collections: 'mens-tops',
  //   category: 'tops',
  //   type: 'drop-cuts',
  //   price: 2899,
  //   description: 'Cool touch, high-cotton LUX Blend fabric.',
  //   images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  //   colors: [
  //     'subtle',
  //     'white',
  //     'black',
  //     'heather grey',
  //     'forest',
  //     'stone',
  //     'navy',
  //     'maroon',
  //     'light heather grey',
  //     'dark heather grey',
  //     'sand',
  //     'olive',
  //     'charcoal',
  //     'atlantic',
  //     'moss',
  //     'mist',
  //     'pebble',
  //     'valencia',
  //   ],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: true },
  //     { size: 'xxl', isAvailable: true },
  //     { size: 'xxxl', isAvailable: false },
  //   ],
  //   stock: 25,
  //   popularity: true,
  // });

  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'drop-cut shirt',
  //   collections: 'mens-tops',
  //   category: 'tops',
  //   type: 'drop-cuts',
  //   price: 2899,
  //   description:
  //     'Meet the new and improved BYLT Blend fabric in your favorite signature drop-cut short sleeve shirt. We have worked hard to take your favorite style to the next level of comfort, fit, & functionality.',
  //   images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  //   colors: [
  //     'black',
  //     'white',
  //     'navy',
  //     'moss',
  //     'charcoal',
  //     'maroon',
  //     'sand',
  //     'olive',
  //     'atlantic',
  //     'mist',
  //     'pebble',
  //     'valencia',
  //     'subtle',
  //     'forest',
  //   ],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: false },
  //     { size: 'xxl', isAvailable: false },
  //     { size: 'xxxl', isAvailable: true },
  //   ],
  //   stock: 25,
  //   popularity: true,
  // });

  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'drop-cut lux pocket',
  //   collections: 'mens-tops',
  //   category: 'tops',
  //   type: 'drop-cuts',
  //   price: 2899,
  //   description:
  //     'Athletic and comfortable cut with our signature drop-cut hemline featuring our new high-cotton LUX Blend fabric.',
  //   images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  //   colors: [
  //     'mist subtle',
  //     'navy mist',
  //     'dark heather grey pebble',
  //     'pink ice subtle',
  //     'atlantic pebble',
  //     'subtle valencia',
  //     'white mist',
  //     'forest bone',
  //     'navy swell',
  //     'bone navy',
  //     'maroon bone',
  //     'stone pacific',
  //     'pacific slate',
  //     'black charcoal',
  //     'charcoal black',
  //     'forest black',
  //     'sand pink ice',
  //     'dusk dark heather grey',
  //   ],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: true },
  //     { size: 'xxl', isAvailable: true },
  //   ],
  //   stock: 25,
  //   popularity: true,
  // });

  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'striped drop-cut lux',
  //   collections: 'mens-tops',
  //   category: 'tops',
  //   type: 'drop-cuts',
  //   price: 2899,
  //   description:
  //     "Elevated to a whole new level, your favorite Drop-Cut: LUX Shirt is made complete with a newly innovative striped pattern. This 'Striped Drop-Cut: LUX' is the perfect way to upgrade your everyday style.",
  //   images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  //   colors: [
  //     'mist bone',
  //     'atlantic pebble',
  //     'pebble atlantic',
  //     'charcoal bone',
  //     'forest black',
  //     'navy bone',
  //     'black grey',
  //     'bone navy',
  //   ],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: true },
  //     { size: 'xxl', isAvailable: true },
  //   ],
  //   stock: 25,
  //   popularity: true,
  // });

  // dataBase.collection('men').add({
  //   id: uuidv4(),
  //   name: 'striped drop-cut v-neck lux',
  //   collections: 'mens-tops',
  //   category: 'tops',
  //   type: 'drop-cuts',
  //   price: 2899,
  //   description:
  //     'A fresh new take on your classic V-Neck. Your favorite style has been elevated with a V-neck collar and our signature Drop-Cut hemline perfected with the LUX fabric you love.',
  //   images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  //   colors: ['bone navy', 'charcoal bone', 'black grey'],
  //   sizes: [
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //     { size: 'xl', isAvailable: true },
  //     { size: 'xxl', isAvailable: true },
  //   ],
  //   stock: 25,
  //   popularity: true,
  // });

  /* women
    ============================================ */
  // dataBase.collection('women').add({
  //   id: uuidv4(),
  //   name: 'the bylt crop top',
  //   collections: 'womens-tops',
  //   category: 'tops',
  //   type: 'crop top',
  //   price: 3899,
  //   discountPer: 30,
  //   description:
  //     'Figure forming with full coverage. Please Note - This Item is EXCHANGE ONLY and not eligible for return',
  //   images: ['1.jpg', '2.jpg', '3.jpg'],
  //   colors: ['grey', 'blush', 'black'],
  //   sizes: [
  //     { size: 'xs', isAvailable: true },
  //     { size: 's', isAvailable: true },
  //     { size: 'm', isAvailable: true },
  //     { size: 'l', isAvailable: true },
  //   ],
  //   stock: 10,
  //   popularity: true,
  // });

  dataBase.collection('women').add({
    id: uuidv4(),
    name: "women's elite + joggers",
    category: 'bottoms',
    type: 'joggers',
    price: 7499,
    description:
      "Reimagined in every way, our Women’s Elite+ Joggers have been completely upgraded for even greater comfort, added durability, and all around flexibility. With the new Elite+ Fabric perfect for any season, you'll never want to take these joggers off!",
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
    ],
    colors: ['black', 'dark olive', 'sand', 'gunmetal', 'storm', 'midnight'],
    sizes: [
      { size: 'xs', isAvailable: true },
      { size: 's', isAvailable: true },
      { size: 'm', isAvailable: false },
      { size: 'l', isAvailable: false },
    ],
    stock: 15,
    popularity: true,
  });

  dataBase.collection('women').add({
    id: uuidv4(),
    name: "women's everyday leggings",
    category: 'bottoms',
    type: 'leggings',
    price: 6899,
    discountPer: 30,
    description:
      'Figure forming, high waisted leggings that lift and sculpt. Please note - This item is EXCHANGE ONLY and not eligible for return.',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    colors: ['blush', 'grey', 'black'],
    sizes: [
      { size: 'xs', isAvailable: true },
      { size: 's', isAvailable: true },
      { size: 'm', isAvailable: false },
      { size: 'l', isAvailable: false },
    ],
    stock: 15,
    popularity: true,
  });

  dataBase.collection('women').add({
    id: uuidv4(),
    name: "women's essential tee",
    category: 'tops',
    type: 'essential tee',
    price: 2899,
    description:
      'Flattering athletic and comfortable cut with a standard straight hemline.',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    colors: ['black', 'white', 'blush'],
    sizes: [
      { size: 'xs', isAvailable: true },
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: false },
      { size: 'l', isAvailable: false },
    ],
    stock: 15,
    popularity: true,
  });

  dataBase.collection('women').add({
    id: uuidv4(),
    name: "women's essential tank",
    category: 'tops',
    type: 'essential tank',
    price: 2899,
    description:
      'Flattering athletic and comfortable cut with our signature drop-cut hemline.',
    images: ['1.png', '2.png', '3.png'],
    colors: ['white', 'black', 'blush'],
    sizes: [
      { size: 'xs', isAvailable: true },
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: false },
      { size: 'l', isAvailable: false },
    ],
    stock: 15,
    popularity: true,
  });
};
