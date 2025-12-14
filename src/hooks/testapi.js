import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getUser = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return { data, isLoading, error };
};

// ------------------- post qilish ----------------
const addUser = async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    }
  );
  return response.data;
};

export const useAddUser = () => {
  const quericlient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: (data) => {
      quericlient.invalidateQueries(["users"]);
      console.log(data);
    },
    onError: (err) => {
      console.log("malumot qoshishda xatolik", err);
    },
  });

  return addMutation;
};
