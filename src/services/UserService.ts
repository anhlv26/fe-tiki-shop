import axios from "axios";
import { User } from "~/types/User";

export const loginUser = async (data: User) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL_BACKEND}/user/sign-in`, data
  );
  return res.data;
};

export const signUpUser = async (data: User) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL_BACKEND}/user/sign-up`, data
  );
  return res.data;
};
