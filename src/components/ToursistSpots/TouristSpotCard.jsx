import PropTypes from "prop-types";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
  const {
    _id,
    imageUrl,
    spotName,
    averageCost,
    totalVisitorsPerYear,
    travelTime,
    seasonality,
  } = spot;

  return (
    <div className="rounded p-2 border border-gray-800 dark:border-gray-200">
      <div className="relative ">
        <img
          className="object-cover h-52 w-full rounded"
          src={imageUrl}
          alt={spotName}
        />
        <p className="absolute inset-0 flex justify-center items-center bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 hover:bg-transparent dark:hover:bg-transparent rounded">
          <Link to={`/touristSpots/${_id}`}>
            <button className="px-4 py-2 font-semibold text-base bg-[#F91842] text-gray-200">
              View Details
            </button>
          </Link>
        </p>
      </div>
      <div>
        <h2 className="text-gray-800 dark:text-gray-200 font-bold text-lg">
          {spotName}
        </h2>
        <ul className="flex items-center justify-between">
          <li className="text-gray-800 dark:text-gray-200">{seasonality}</li>
          <li className="text-white m-2 p-1 rounded text-xs bg-[#F91842]">
            {`$${averageCost}`}
          </li>
        </ul>
        <ul className="flex items-center justify-between text-gray-800 dark:text-gray-200 text-sm border-t-2 border-gray-800 dark:border-gray-200">
          <li className="flex items-center gap-1">
            <FaPeopleGroup /> {totalVisitorsPerYear}
          </li>
          <li className="flex items-center gap-1">
            <FcOvertime /> {travelTime}
          </li>
        </ul>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default TouristSpotCard;
