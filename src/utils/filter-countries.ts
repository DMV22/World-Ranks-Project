import type { Country } from "@/interfaces/country";
import type { FilterState } from "@/interfaces/country-filters";

export function filterCountries(
  countries: Country[],
  filters: FilterState
): Country[] {
  const { search, region, sortBy, unMember, independent } = filters;

  let result = [...countries];

  const normalizedSearch = search.trim().toLowerCase();

  if (normalizedSearch) {
    result = result.filter((country) => {
      const countryName = country.names.common.toLowerCase();
      const countryRegion = country.region.toLowerCase();

      return (
        countryName.includes(normalizedSearch) ||
        countryRegion.includes(normalizedSearch)
      );
    });
  }

  if (region.length > 0) {
    result = result.filter((country) => region.includes(country.region));
  }

  if (independent) {
    result = result.filter((country) => country.classification.sovereign);
  }

  if (unMember) {
    result = result.filter((country) => country.classification.un_member);
  }

  switch (sortBy) {
    case "population":
      result.sort((a, b) => b.population - a.population);
      break;
    case "area":
      result.sort((a, b) => (b.area?.kilometers ?? 0) - (a.area?.kilometers ?? 0));
      break;
    case "name":
      result.sort((a, b) => a.names.common.localeCompare(b.names.common));
      break;
  }

  return result;
}