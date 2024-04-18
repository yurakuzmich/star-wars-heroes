export enum ApiResources {
  People = "people",
  Planets = "planets",
  Films = "films",
  Species = "species",
  Vehicles = "vehicles",
  Starships = "starships",
}

export interface URLOptions {
  page?: number;
  search?: string;
  format?: string;
}
