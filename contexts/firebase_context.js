import React, { createContext, useContext } from 'react';

import firebase from '../lib/firebase.prod';

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
