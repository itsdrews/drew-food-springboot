import axios, { type AxiosPromise } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FoodData } from "../interface/FoodData";


export const postData = async (data:FoodData): Promise<any> => {
  const response = await axios.post<FoodData[]>(
    "http://localhost:8080/food",data
  );
  return response.data;
};

export function useFoodDataMutate(){
  const queryClient = useQueryClient();
  const mutate = useMutation({
      mutationFn:postData,
      retry:2,
      onSuccess: () =>{
        queryClient.invalidateQueries(['food-data'])

      }
  });

  return mutate;
}