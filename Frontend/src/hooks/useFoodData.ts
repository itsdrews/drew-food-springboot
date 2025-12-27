import axios, { type AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { FoodData } from "../interface/FoodData";


export const fetchData = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(
    "http://localhost:8080/food"
  );
  return response.data;
};

export function useFoodData(){
  const query = useQuery<FoodData[]>({
      queryFn:fetchData,
      queryKey:['food-data'],
      retry:2
  });

  return {
    ...query,
    data:query.data
  };
}