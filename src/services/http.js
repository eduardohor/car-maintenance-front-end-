import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}) 

export const axiosInstanceWithToken = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL_BASE}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})