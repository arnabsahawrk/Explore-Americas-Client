import { useNavigate, useParams } from "react-router-dom";
import UpdateSpotForm from "./UpdateSpotForm";
import useSpotDetails from "../../hooks/useSpotDetails";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateSpot = () => {
  const { id } = useParams();
  const { spot, loading } = useSpotDetails(id);
  const navigate = useNavigate();

  //Update Spot
  const handleUpdateSpot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const spotLocation = form.spotLocation.value;
    const spotDescription = form.spotDescription.value;
    const averageCost = parseFloat(form.averageCost.value);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = parseFloat(form.totalVisitorsPerYear.value);

    const newSpot = {
      imageUrl,
      spotName,
      countryName,
      spotLocation,
      spotDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
    };

    try {
      const response = await axios.put(
        `https://explore-americas-server.vercel.app/tourist-spots/${id}`,
        newSpot
      );
      const { data } = response;
      if (data?.modifiedCount) {
        toast.success("Spot details has been updated.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });

        setTimeout(() => {
          navigate("/addedSpot");
        }, 1000);
      }
    } catch {
      toast.error("Failed To update spot details, try again.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10 min-h-[30vh] px-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 rounded-lg border border-gray-800 dark:border-gray-200">
          <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-4 md:mt-6">
            Update Spot
          </h1>
          <UpdateSpotForm spot={spot} handleUpdateSpot={handleUpdateSpot} />
        </div>
      )}
    </section>
  );
};

export default UpdateSpot;
