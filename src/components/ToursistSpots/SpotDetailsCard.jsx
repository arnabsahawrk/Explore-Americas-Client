import PropTypes from "prop-types";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcOvertime } from "react-icons/fc";
const SpotDetailsCard = ({ spot }) => {
  const {
    imageUrl,
    spotName,
    countryName,
    spotLocation,
    spotDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = spot;
  return (
    <div className="rounded-lg border border-gray-800 dark:border-gray-200 flex flex-col items-center gap-2 m-2 container mx-auto px-4 md:px-8 lg:px-16 py-4">
      <div>
        <img
          className="object-cover size-full rounded"
          src={imageUrl}
          alt={spotName}
        />
      </div>
      <div className="space-y-2 text-gray-800 dark:text-gray-200 text-lg text-center">
        <h2 className="font-bold text-3xl">{countryName}</h2>
        <h2 className="font-bold text-2xl">{`${spotName}, ${spotLocation}`}</h2>
        <p className="font-medium">{spotDescription}</p>
        <p className="font-medium">
          <span className="font-bold underline">Seasonality:</span>
          {"  "}
          {seasonality}
        </p>
        <p>
          <span className="text-[#F91842]  p-1 rounded font-bold text-xl">
            <span className="font-bold underline text-gray-800 dark:text-gray-200">
              Average Cost:
            </span>
            {"  "}
            {`$${averageCost}`}
          </span>
        </p>
        <ul>
          <li className="flex justify-center items-center gap-2">
            <span className="font-bold underline">Visitors Per Year:</span>
            <FaPeopleGroup /> {totalVisitorsPerYear}
          </li>
          <li className="flex justify-center items-center gap-2">
            <span className="font-bold underline">Travel Time:</span>
            <FcOvertime /> {travelTime}
          </li>
        </ul>
      </div>
    </div>
  );
};

SpotDetailsCard.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default SpotDetailsCard;
