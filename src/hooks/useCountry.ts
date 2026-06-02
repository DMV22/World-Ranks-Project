import useSWR from "swr";
import axios from "axios";
import { type Country } from "@/interfaces/Country";

const fetcher = async (url: string): Promise<Country[]> => {
  const response = await axios.get<Country[]>(url);

  return response.data.sort((a: Country, b: Country) => b.population - a.population);
};

export function useCountries() {
  const { data, error, isLoading } = useSWR<Country[]>(
    "https://restcountries.com/v3.1/all?fields=name,population,flags,area,region",
    fetcher
  );

  return {
    countries: data || [],
    isLoading,
    isError: !!error,
    error
  };
}
