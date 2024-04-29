import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LogIn User
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LogOut User
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Log In In With Medium
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const logInWithMedium = (medium) => {
    setLoading(true);
    switch (medium) {
      case "google":
        return signInWithPopup(auth, googleProvider);
      case "github":
        return signInWithPopup(auth, githubProvider);
    }
  };

  //Observer On User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //Auth User Data
  const AuthInfo = {
    user,
    loading,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    logInWithMedium,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
