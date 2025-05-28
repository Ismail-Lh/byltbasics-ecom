import axios from "axios";

import { API_URL } from "@/constants/env.constants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
