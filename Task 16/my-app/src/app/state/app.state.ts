import {Animal, AnimalType} from "../modules/types";

export interface AppState {
  animals: Animal[];
  collection?: any;
  currentKindOfAnimal?: AnimalType | null;
  isLoading?: boolean;
}

export const initialState: AppState = {
  animals: [],
  collection: null,
};
