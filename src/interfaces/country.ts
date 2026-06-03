import type { Region } from "@/constants/regions";

export interface Country {
  cca3: string;
  flags: {
    png: string;
    svg?: string;
    alt?: string;
  };
  name: {
    common: string;
  };
  population: number;
  area?: number;
  region: Region;
  unMember: boolean;
  independent?: boolean;
}
