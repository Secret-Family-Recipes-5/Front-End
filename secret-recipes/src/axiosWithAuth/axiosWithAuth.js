import axios from "axios";

export const axiosWithAuth = () => {
  // const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    baseURL: "https://secret-recipe-5.herokuapp.com/",
  });
};
