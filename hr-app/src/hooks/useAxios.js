import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useAxios = () => {
  const get = (url) => axios.get(BASE_URL + url);
  const post = (url, data) => axios.post(BASE_URL + url, data);
  const patch = (url, data) => axios.patch(BASE_URL + url, data);

  return { get, post, patch };
};

export default useAxios;
