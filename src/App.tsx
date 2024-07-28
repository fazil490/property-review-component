import { Button } from "@mui/material";
import Details from "./components/Details";
import Header from "./components/Header";
import propertyImg from "./assets/propertyImage.png"

const App: React.FC = () => {
  const basicDetails = {
    title: "Basic Details",
    details: [
      { label: "Property Type", value: "Residential" },
      { label: "Looking to", value: "Sell" },
    ],
  };

  const propertyDetails = {
    title: "Property Details",
    details: [
      { label: "Property Type", value: "Apartment" },
      { label: "Building/Project", value: "Sandy Paradise" },
      { label: "Locality", value: "Alwarpet, Chennai" },
      { label: "BHK", value: "2BHK" },
      { label: "Built Up Area", value: "1650 sq.ft" },
      { label: "Furnish Type", value: "Semi Furnished" },
      { label: "Furnishing", value: "Washing Machine, Fridge etc" },
      { label: "Amenities", value: "Lift, CCTV, Regular Water Supply etc" },
    ],
  };

  const priceDetails = {
    title: "Price Details",
    details: [
      { label: "Monthly Rent", value: "Rs.15,000" },
      { label: "Available from", value: "01/08/2024" },
      { label: "Security Deposit", value: "6 months" },
      { label: "Negotiable", value: "no" },
    ],
  };

  const additionalDetails = {
    title: "Additional Details",
    details: [
      { label: "Bathroom", value: "2" },
      { label: "Balcony", value: "2" },
      { label: "Parking", value: "Yes" },
      { label: "Maintanance Charges", value: "Rs.2,000" },
      { label: "Facing", value: "West" },
      { label: "Carpet Area", value: "1650 sq.ft" },
      { label: "Servant Room", value: "No" },
      { label: "Total Floors", value: "10" },
    ],
  };
  const amenitiesDetails = {
    title: "Amenities",
    details: [
      {
        label: "Amenities",
        value:
          "Lift, CCTV, Regular Water Supply, Power Backup, Kids Area, Swimming Pool etc",
      },
    ],
  };

  const photoDetails = {
    title: "Photos",
    details: [
      {
        label: "Property Image",
        value:
          propertyImg,
      },
      {
        label: "Property Image",
        value:
          propertyImg,
      },
      {
        label: "Property Image",
        value:
          propertyImg,
      },
      {
        label: "Property Image",
        value:
          propertyImg,
      },
    ],
  };

  return (
    <div className="bg-white md:w-[45%] mx-2 md:mx-auto mt-8 md:my-8 p-4 md:p-6 rounded-t-3xl md:rounded-3xl font-K2D">
      <Header />
      <Details section={basicDetails} />
      <Details section={propertyDetails} />
      <Details section={priceDetails} />
      <Details section={additionalDetails} />
      <Details section={amenitiesDetails} />
      <Details section={photoDetails}/>

      <div className="md:flex md:justify-end">
        <Button
          style={{
            backgroundColor: "#2E368F",
            borderRadius: "3rem",
            padding: "5px 3rem",
          }}
          variant="contained"
          className="w-full md:w-auto"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default App;
