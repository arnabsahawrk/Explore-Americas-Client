import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

const useAuth = () => {
  const AuthData = useContext(AuthContext);
  return AuthData;
};

export default useAuth;
