import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAddedSpot from "../../hooks/useAddedSpot";
import Spinner from "../Spinner/Spinner";
import AddedSpotTable from "./AddedSpotTable";
import Swal from "sweetalert2";
import axios from "axios";
import useData from "../../hooks/useData";

const AddedSpot = () => {
  const { user } = useAuth();
  const { addedSpot, loading, refetchUser } = useAddedSpot(user?.email);
  const { refetch } = useData();

  //Delete Spot
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://explore-americas-server.vercel.app/tourist-spots/${id}`
          );
          const { data } = response;
          if (data?.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "This spot has been deleted.",
              icon: "success",
            });
            refetchUser();
            refetch();
          }
        } catch {
          Swal.fire({
            title: "Failed",
            text: "Failed to delete, try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10 min-h-[30vh]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 space-y-4 md:space-y-6">
        {loading ? (
          <Spinner />
        ) : addedSpot?.length ? (
          <AddedSpotTable addedSpot={addedSpot} handleDelete={handleDelete} />
        ) : (
          <div className="text-[#F91842] flex justify-center flex-col items-center gap-4 text-center">
            <Link to="/addSpot">
              <IoIosAddCircle className="text-6xl" />
            </Link>
            <p className=" text-5xl">Didn&apos;t Added Any Spot Yet</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddedSpot;
