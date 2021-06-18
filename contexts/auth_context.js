import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase.prod';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const signUp = (email, password, firstName, lastName) => {
    return auth.createUserWithEmailAndPassword(email, password).then(result =>
      result.user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      })
    );
  };

  const login = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, login }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
