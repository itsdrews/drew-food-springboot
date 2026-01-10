import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { FoodData } from "../interface/FoodData";

export const updateFood = async (data: FoodData) => {
  const response = await axios.put(
    `http://localhost:8080/food/${data.id}`,
    data
  );
  return response.data;
};

export function useFoodDataEdit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFood,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });
}
