import { useMemo } from "react";
import { useCountries } from "@/hooks/use-country";

export function useCountryDetails(code?: string) {
  const { countries, isLoading, isError } = useCountries();

  const country = useMemo(() => {
    if (!code || countries.length === 0) return null;
    return countries.find((c) => c.codes.alpha_3 === code) ?? null;
  }, [countries, code]);

  return {
    country,
    countries,
    isLoading,
    isError,
  };
}