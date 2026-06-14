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
    official: string;
  };
  population: number;
  area?: number;
  region: Region;
  subregion?: string;
  capital?: string[];
  continents: string[];
  borders?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string,
    {
      name: string;
      symbol?: string;
    }
  >;
  unMember: boolean;
  independent?: boolean;
}