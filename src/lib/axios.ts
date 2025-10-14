import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://my-cash-wallet.vercel.app/api/v1",
  withCredentials: true,    
  // headers: {
  //   "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGU3ODAyZTY5OWQ0NTNjYzkxMjUyY2MiLCJwaG9uZSI6IjAxNzIwNTQ1Njk0Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjAwMzExMzgsImV4cCI6MTc2MDExNzUzOH0.f733ZYao89e3iiRNFMB0XW4VOEn1aW8j1A0wS7zZjwQ"
  // }
});
