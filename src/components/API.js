import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Client-ID zr1Os87TpRzUJS7xGhKv3NSxWm-6AC-9zIcesBRS42c";

const params = {
  orientation: "landscape",
  per_page: 15,
};

export const fetchApi = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    { params }
  );
  console.log(response);
  return response;
};
