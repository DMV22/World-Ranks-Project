import { useState } from "react";
import type { FilterState } from "@/interfaces/country-filters";

export const initialFilters: FilterState = {
  region: [],
  sortBy: "population",
  independent: false,
  unMember: false,
};

export default function useCountryFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => setFilters(initialFilters);

  return {
    filters,
    updateFilter,
    resetFilters
  }
}