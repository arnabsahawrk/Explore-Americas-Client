import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";
import { MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddedSpotTable = ({ addedSpot, handleDelete }) => {
  const navigate = useNavigate();
  const TABLE_HEAD = [
    "Spot Name",
    "Country",
    "Seasonality",
    "Average Cost",
    "Travel Time",
    "Visitors Per Year",
    "",
  ];

  return (
    <div>
      <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4 md:my-6">
        Added {`Spot${addedSpot?.length > 1 ? "s" : ""}`}
      </h1>
      <Card className="h-full w-full overflow-auto bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-gray-800 dark:border-gray-200 bg-gray-200 dark:bg-gray-800 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none text-gray-800 dark:text-gray-200 font-lato"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {addedSpot?.map(
              (
                {
                  _id,
                  spotName,
                  countryName,
                  spotLocation,
                  averageCost,
                  seasonality,
                  travelTime,
                  totalVisitorsPerYear,
                },
                index
              ) => {
                const isLast = index === addedSpot.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-800 dark:border-gray-200";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {`${spotName}, ${spotLocation}`}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {countryName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {`$${averageCost}`}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {seasonality}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {travelTime}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-gray-800 dark:text-gray-200 font-lato"
                      >
                        {totalVisitorsPerYear}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="button"
                        variant="lead"
                        color="blue-gray"
                        className="font-medium text-gray-800 dark:text-gray-200 font-lato hover:text-[#F91842] dark:hover:text-[#F91842]"
                      >
                        <MdModeEdit
                          onClick={() => navigate(`/addedSpot/${_id}`)}
                          className="text-2xl"
                        />
                      </Typography>
                      <Typography
                        as="button"
                        variant="lead"
                        color="blue-gray"
                        className="font-medium text-gray-800 dark:text-gray-200 font-lato mt-3 hover:text-[#F91842] dark:hover:text-[#F91842]"
                      >
                        <AiOutlineDelete
                          onClick={() => handleDelete(_id)}
                          className="text-2xl"
                        />
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

AddedSpotTable.propTypes = {
  addedSpot: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AddedSpotTable;
