import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const deleteFood = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:8080/food/${id}`
  );
  return response.data;
};

export function useFoodDataDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFood,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });
}
