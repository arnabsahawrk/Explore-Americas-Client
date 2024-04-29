import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { countryName, imageUrl, description } = country;
  return (
    <Link to={`/touristSpots/tourist-spots/countries/${countryName}`}>
      <div className="rounded border border-gray-800 dark:border-gray-200 p-4 h-full text-center">
        <img
          className="object-cover h-52 w-full rounded"
          src={imageUrl}
          alt={countryName}
        />
        <h2 className="text-gray-800 dark:text-gray-200 font-bold text-2xl my-1">
          {countryName}
        </h2>
        <p className="text-gray-800 dark:text-gray-200 font-medium text-base text-justify">
          {description}
        </p>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
