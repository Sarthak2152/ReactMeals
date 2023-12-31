import axios from "axios";

const fetchMeals = async () => {
  try {
    const response = await axios.get("http://localhost:5000/meals");
    return response.data;
  } catch (error) {
    throw new Error("Something went wrong...");
  }
};

export default fetchMeals;
