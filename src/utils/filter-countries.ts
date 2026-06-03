import type { Country } from "@/interfaces/country";
import type { FilterState } from "@/interfaces/country-filters";

export function filterCountries(
  countries: Country[],
  filters: FilterState
): Country[] {
  let result = [...countries];


  if (filters.region.length > 0) {
    result = result.filter((country) =>
      filters.region.includes(country.region)
    );
  }

  if (filters.independent) {
    result = result.filter((country) => country.independent);
  }

  if (filters.unMember) {
    result = result.filter((country) => country.unMember);
  }

  switch (filters.sortBy) {
    case "population":
      result.sort((a, b) => b.population - a.population);
      break;
    case "area":
      result.sort((a, b) => (b.area ?? 0) - (a.area ?? 0));
      break;
    case "name":
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
      break;
  }

  return result;
}