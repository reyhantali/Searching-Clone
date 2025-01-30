import axios from "axios";

const searchImages = async (t) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID lHch2-88pfRUoU5LIe9UB40cmK8cWul9kgwLYEBczr4",
    },
    params: {
      query: t,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;