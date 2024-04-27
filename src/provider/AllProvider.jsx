import PropTypes from "prop-types";
import AuthContextProvider from "../contexts/AuthContextProvider";

const AllProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

AllProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProvider;
