import PropTypes from "prop-types";

const AddSpotForm = ({ handleAddSpotSubmit }) => {
  return (
    <form onSubmit={handleAddSpotSubmit} className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Details */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            placeholder="User Email"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Image URL */}
        <div className="space-y-2 col-auto md:col-span-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Image Url
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Enter image URL"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Spot Name */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Spot Name
          </label>
          <input
            type="text"
            name="spotName"
            placeholder="Enter Spot Name"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Country Name */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Country Name
          </label>
          <select
            name="countryName"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
          >
            <option value="USA">United States of America</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="Peru">Peru</option>
          </select>
        </div>
        {/* Spot Location */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Spot Location
          </label>
          <input
            type="text"
            name="spotLocation"
            placeholder="Enter Spot Location"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Spot Description */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Spot Description
          </label>
          <input
            type="text"
            name="spotDescription"
            placeholder="Enter Spot Description"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Average Cost */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Average Cost
          </label>
          <input
            type="text"
            name="averageCost"
            placeholder="Enter Average Cost"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Seasonality */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Seasonality
          </label>
          <input
            type="text"
            name="seasonality"
            placeholder="Enter Seasonality"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Travel Time */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Travel Time
          </label>
          <input
            type="text"
            name="travelTime"
            placeholder="Enter Travel Time"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
        {/* Total Visitors Per Year */}
        <div className="space-y-2">
          <label className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
            Total Visitors Per Year
          </label>
          <input
            type="text"
            name="totalVisitorsPerYear"
            placeholder="Enter Total Visitors Per Year"
            className="bg-gray-200 dark:bg-gray-800 border border-gray-800 dark:border-gray-200 rounded-md py-2 px-4 w-full focus:outline-[#F91842] text-gray-800 dark:text-gray-200"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#F91842] rounded-md text-2xl text-gray-200 w-full py-2 mt-6 shadow-2xl hover:shadow-none"
      >
        Add Spot
      </button>
    </form>
  );
};

AddSpotForm.propTypes = {
  handleAddSpotSubmit: PropTypes.func.isRequired,
};

export default AddSpotForm;
