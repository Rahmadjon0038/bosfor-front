// 
import { instance } from "./api";
import { useQuery } from "@tanstack/react-query";


const getAllproduct = async () => {
  const response = await instance("/products/all");
  return response.data;
};

export const usegetAllproducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllproduct,
   
  });

  return { data, isLoading, error };
};
