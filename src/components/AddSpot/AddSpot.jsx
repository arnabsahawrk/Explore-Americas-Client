import AddSpotForm from "./AddSpotForm";

const AddSpot = () => {
  const handleAddSpotSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const imageUrl = form.imageUrl.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const spotLocation = form.spotLocation.value;
    const spotDescription = form.spotDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

    const newSpot = {
      userName,
      userEmail,
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
  };
  return (
    <section className="bg-gray-200 dark:bg-gray-800 py-10 px-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 rounded-lg border border-gray-800 dark:border-gray-200">
        <AddSpotForm handleAddSpotSubmit={handleAddSpotSubmit} />
      </div>
    </section>
  );
};

export default AddSpot;
