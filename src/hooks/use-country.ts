import useSWR from "swr";
import axios from "axios";
import type { Country } from "@/interfaces/country";

const fetcher = async (url: string): Promise<Country[]> => {
  const response = await axios.get<Country[]>(url);
  return response.data;
};

export function useCountries() {
  const { data, error, isLoading } = useSWR<Country[], Error>(
    `https://restcountries.com/v3.1/all?fields=name,population,flags,area,region,independent,unMember`,
    fetcher
  );

  return {
    countries: data || [],
    isLoading,
    isError: !!error,
    error
  };
}
