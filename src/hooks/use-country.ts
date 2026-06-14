import useSWR from "swr";
import axios from "axios";
import type { Country } from "@/interfaces/country";

const BASE_URL = "https://api.restcountries.com/countries/v5";
const API_KEY = import.meta.env.VITE_APP_COUNTRIES_API_KEY ?? "rc_live_demo";
const LIMIT = 100;

const RESPONSE_FIELDS = [
  "codes",
  "names",
  "flag",
  "population",
  "area",
  "region",
  "subregion",
  "capitals",
  "continents",
  "borders",
  "languages",
  "currencies",
  "classification",
].join(",");

interface ApiResponse {
  data: {
    objects: Country[];
    meta: {
      total: number;
      count: number;
      limit: number;
      offset: number;
      more: boolean;
    };
  };
}

function buildUrl(offset: number): string {
  return `${BASE_URL}?limit=${LIMIT}&offset=${offset}&response_fields=${RESPONSE_FIELDS}`;
}

const parallelFetcher = async (offsets: number[]): Promise<Country[]> => {
  const requests = offsets.map(offset =>
    axios.get<ApiResponse>(buildUrl(offset), {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
  );

  const responses = await Promise.all(requests);
  return responses.flatMap(res => res.data?.data?.objects ?? []);
};

export function useCountries() {
  const { data: countries = [], error, isLoading } = useSWR<Country[], Error>([0, 100, 200],
    parallelFetcher
  );

  return {
    countries,
    isLoading,
    isError: !!error,
    error
  };
}
