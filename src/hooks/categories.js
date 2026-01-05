

import { instance } from "./api";
import { useQuery } from "@tanstack/react-query";


const getcategories = async () => {
  const response = await instance("/categories/all");
  return response.data;
};

export const usegetcategoriess = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getcategories,
   
  });

  return { data, isLoading, error };
};

// ---------- get categori id ---------
const getCategoryiD = async ({queryKey}) => {
  const id = queryKey[1];
  const response = await instance(`/categories/${id}`);
  return response.data;
};

export const usegetCategoryiD = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories",id],
    queryFn: getCategoryiD,
   
  });

  return { data, isLoading, error };
};

