import axios from "axios";
import toast from "react-hot-toast";

const get_details = async ({ name }) => {
  try {
    // Display loading toast
    const loadingToastId = toast.loading("Fetching details...");

    // Make API requests
    const ageResponse = await axios.get(`https://api.agify.io?name=${name}`);
    const genderResponse = await axios.get(`https://api.genderize.io?name=${name}`);
    const nationalityResponse = await axios.get(`https://api.nationalize.io?name=${name}`);

    // Extract data from responses
    const age = ageResponse.data.age;
    const gender = genderResponse.data.gender;
    const nationality = nationalityResponse.data.country[0]?.country_id;

    // Dismiss loading toast
    toast.dismiss(loadingToastId);

    // Display success toast
    toast.success("Details fetched successfully!");

    // Return details
    return { age, gender, nationality };
  } catch (error) {
    // Display error toast
    toast.error("Failed to fetch details. Please try again later.");

    // Throw error to be caught by the caller
    throw error;
  }
};

export default get_details;
