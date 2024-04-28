import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="sweet-loading mr-5 md:mr-10 py-10">
        <BounceLoader color="#F91842" loading={true} size={100} />
      </div>
    </div>
  );
};

export default Spinner;
