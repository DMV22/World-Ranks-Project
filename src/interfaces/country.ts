import type { Region } from "@/constants/regions";

export interface Country {
  codes: {
    alpha_3: string;
  };
  flag: {
    url_png: string;
    url_svg?: string;
    description?: string;
  };
  names: {
    common: string;
    official: string;
  };
  population: number;
  area?: {
    kilometers?: number;
  };
  region: Region;
  subregion?: string;
  capitals?: {
    name: string;
    coordinates?: { lat: number; lng: number };
    attributes?: { primary?: boolean };
  }[];
  continents: string[];
  borders?: string[];
  languages?: {
    iso_639_3?: string;
    name: string;
    native_name?: string;
  }[];
  currencies?: {
    code: string;
    name: string;
    symbol?: string;
  }[];
  classification: {
    un_member: boolean;
    sovereign?: boolean;
  };
}