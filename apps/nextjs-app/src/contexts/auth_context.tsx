import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase.prod";

type AuthContextType = {
  user: User | null;
  signUp: ({
    email,
    password,
    firstName,
    lastName,
  }: SignUpProps) => Promise<void>;
  login: ({ email, password }: LoginProps) => Promise<User>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  err: string;
  setErr: (err: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

type SignUpProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type LoginProps = {
  email: string;
  password: string;
};

type User = {
  email: string;
  firstName: string;
  lastName: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignUpProps) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = updateProfile(res.user, {
      displayName: `${firstName} ${lastName}`,
    });

    return user;
  };

  const login = async ({ email, password }: LoginProps) => {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  };

  const logout = async () => {
    const res = await signOut(auth);

    return res;
  };

  const resetPassword = async (email: string) => {
    const res = await sendPasswordResetEmail(auth, email);

    return res;
  };

  // const updateEmail = async email => {
  //   const res = await user.updateEmail(email);

  //   return res;
  // };

  // const updatePassword = async password => {
  //   const res = await user.updatePassword(password);

  //   return res;
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
      }}
    >
      {!load && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
