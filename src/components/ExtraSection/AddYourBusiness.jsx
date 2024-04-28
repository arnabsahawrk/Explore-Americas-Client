import { Link } from "react-router-dom";

const AddYourBusiness = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://i.postimg.cc/x8hL8TYw/cathy-williams-i-Fc34iv-N2-HE-unsplash.jpg')`,
      }}
      className="bg-cover bg-bottom bg-no-repeat h-[400px] relative"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 z-10  overflow-hidden bg-gray-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center text-gray-800 dark:text-gray-200 space-y-4 md:space-y-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold">
            Sprayed Your Business With Us
          </h2>
          <p className="text-sm md:text-lg">
            Experience the richness of the Americas through Explore Americas.
            With a diverse array of destinations spanning from the bustling
            streets of New York City to the ancient ruins of Machu Picchu, our
            platform offers a gateway to unparalleled adventures. Let us be your
            guide as we paint your travel dreams with the vibrant hues of
            discovery.
          </p>
          <Link to="/addSpot">
            <button className="bg-[#F91842] rounded-md text-base  md:text-lg text-gray-200 mt-6 px-4 py-2 shadow-2xl hover:shadow-none">
              Add Your Business
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddYourBusiness;
