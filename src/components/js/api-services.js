import axios from 'axios';
// const ACCESS_KEY = 'phd-EQ-ByJkvop606hOPbfXZvmk9CcxbMacjEL9JSvk';
// 
// axios.defaults.baseURL = "https://api.unsplash.com/";
// 
// export const fetchArticles = async (searchQuery, ) => {
//   const response = await axios.get("/search/photos", {
    // params: {
    //   query: searchQuery,
    // },
    // headers:{
        // Authorization: `Client-ID ${ACCESS_KEY}`,
        // "Accept-Version": "v1",
    // }
//   });
// 
//   return response.data.results;
// };
const ACCESS_KEY = 'phd-EQ-ByJkvop606hOPbfXZvmk9CcxbMacjEL9JSvk';
const BASE_URL = 'https://api.unsplash.com';

export const fetchData = async (searchStr, pageNum) => {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
    });
  
    const apiParams = {
      client_id: ACCESS_KEY,
      page: pageNum,
      query: encodeURIComponent(searchStr),
      per_page: 10,
    };
  
    const endPoint = `/search/photos?${new URLSearchParams(
      apiParams
    ).toString()}`;
  
    try {
      const response = await axiosInstance.get(endPoint);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };