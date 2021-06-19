import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase.prod';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

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

  const resetPassword = async email => {
    const res = await auth.sendPasswordResetEmail(email);

    return res;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      setLoad(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        login,
        logout,
        resetPassword,
        err,
        setErr,
        loading,
        setLoading,
      }}>
      {!load && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
