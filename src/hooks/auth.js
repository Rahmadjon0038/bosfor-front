import axios from "axios";
import Cookies from "js-cookie";

import { instance } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const register = async (registerData) => {
  const response = await instance.post("/api/auth/register", registerData);
  return response.data;
};

export const useRegister = () => {
  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log("royhatdan otish xatolik xatolik", err);
    },
  });

  return registerMutation;
};

// ------------------login ------------------

const login = async (loginData) => {
  const response = await instance.post("/api/auth/login", loginData);
  return response.data;
};

export const uselogin = () => {
  const quericlient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      console.log(data.token, "login data");
      quericlient.invalidateQueries(["users"]);
    },
    onError: (err) => {
      console.log("tizimga kirishda xatolik", err);
    },
  });
  return loginMutation;
};
