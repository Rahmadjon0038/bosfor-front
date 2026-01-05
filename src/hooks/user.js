import axios from "axios";
import Cookies from "js-cookie";

import { instance } from "./api";
import { useQuery } from "@tanstack/react-query";

const token = Cookies.get("token");

const getUser = async () => {
  const response = await instance("/user/me");
  return response.data;
};

export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
    enabled: !!token,
  });

  return { data, isLoading, error };
};
