import { v4 as uuidv4 } from 'uuid';

export const addDataBase = firebase => {
  const dataBase = firebase.firestore();
  dataBase.settings({ timestampsInSnapshots: true });
  /* men
    ============================================ */

  dataBase.collection('men').add({
    id: uuidv4(),
    name: 'drop-cuts: lux',
    collections: 'mens-tops',
    price: 28990,
    description: 'Cool touch, high-cotton LUX Blend fabric.',
    images: ['1'],
    colors: ['subtle'],
    sizes: [
      { size: 's', isAvailable: true },
      { size: 'm', isAvailable: true },
      { size: 'l', isAvailable: true },
      { size: 'xl', isAvailable: true },
      { size: 'xxl', isAvailable: true },
      { size: 'xxxl', isAvailable: false },
    ],
    stock: 25,
  });
};
