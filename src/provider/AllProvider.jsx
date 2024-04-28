import PropTypes from "prop-types";
import AuthContextProvider from "../contexts/AuthContextProvider";
import DataContextProvider from "../contexts/DataContextProvider";

const AllProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <DataContextProvider>{children}</DataContextProvider>
    </AuthContextProvider>
  );
};

AllProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllProvider;
