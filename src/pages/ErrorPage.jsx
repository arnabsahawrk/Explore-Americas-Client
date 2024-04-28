import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import page404 from "../assets/json/404-page.json";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-between gap-4 pt-2 pb-10">
        <Lottie animationData={page404} loop={true} />
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-base font-bold text-gray-200 bg-[#F91842] rounded-md shadow-2xl hover:shadow-none"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
