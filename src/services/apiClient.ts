import axios from "axios";
import { cookies } from "next/headers";

const BASE_URL = "http://localhost:3000";
const authCookie = cookies().get("next-auth.session-token")?.value;

// Set default headers for axios
axios.defaults.headers.common.Authorization = authCookie 

// Create apiClient
export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,

});
