import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  //Auth User Data
  const AuthInfo = {};
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
