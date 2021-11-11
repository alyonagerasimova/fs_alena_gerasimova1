import {createSelector} from "@ngrx/store";
import {AppState} from "./app.state";

export const selectAnimalCollection = createSelector(
  (state: AppState) => state.animals,
  (state: AppState) => state.currentKindOfAnimal,
  (animals, currentKindOfAnimal) => {
    return currentKindOfAnimal ? animals.filter(animal => animal.kindOfAnimal !== currentKindOfAnimal) : animals
  }
)
