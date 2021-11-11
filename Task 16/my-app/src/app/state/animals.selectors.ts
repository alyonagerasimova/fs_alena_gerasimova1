import {createFeatureSelector, createSelector} from "@ngrx/store";
import {animalsReducer} from "./animals.reducer";
import {Animal} from "../modules/types";

export const selectAnimals = createFeatureSelector<Animal[]>('animalsList');

export const selectAnimalCollection = createSelector(
  selectAnimals,
  state => state.map((animal) => animal)
)
