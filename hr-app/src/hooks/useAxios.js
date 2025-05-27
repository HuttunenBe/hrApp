import axios from "axios";

const BASE_URL = "https://hr-app-backend-1-esbm.onrender.com";

const useAxios = () => {
  const get = (url) => axios.get(BASE_URL + url);
  const post = (url, data) => axios.post(BASE_URL + url, data);
  const patch = (url, data) => axios.patch(BASE_URL + url, data);

  return { get, post, patch };
};

export default useAxios;
