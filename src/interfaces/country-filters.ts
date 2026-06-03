import type { Region } from "@/constants/regions";

export type SortOption = "population" | "area" | "name";

export interface FilterState {
  sortBy: SortOption;
  region: Region[];
  independent: boolean;
  unMember: boolean;
}