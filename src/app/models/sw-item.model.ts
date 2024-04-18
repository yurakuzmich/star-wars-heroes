import { SWFilm } from "./film.model";
import { SWHero } from "./people.model";
import { SWPlanet } from "./planet.model";
import { SWSpecies } from "./species.model";
import { SWStarship } from "./starship.model";
import { SWVehicle } from "./vehicle.model";

export type SWItem = SWHero | SWPlanet | SWFilm | SWSpecies | SWVehicle | SWStarship;

export interface SWItemCardField {
  title: string;
  fieldName: string;
  style?: string;
}
