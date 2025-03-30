import axios from "axios";
import authHeader from "./auth-header";

const baseURL = "https://localhost:7095";

const API_URL = "/employees";

const getAllPrivatePosts = () => {
  return axios.get(baseURL+API_URL, { headers: authHeader() });
};

const getPrivatePostByid = (id) => {
  return axios.get(`${baseURL}${API_URL}/${id}`, { headers: authHeader() });
};

const postService = {
  getAllPrivatePosts,
  getPrivatePostByid,
};

export default postService;