import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase.prod';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, firstName, lastName) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);

    const user = res.user.updateProfile({
      displayName: `${firstName} ${lastName}`,
    });

    return user;
  };

  const login = async (email, password) => {
    const res = await auth.signInWithEmailAndPassword(email, password);

    return res;
  };

  const logout = async () => {
    const res = await auth.signOut();

    return res;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
