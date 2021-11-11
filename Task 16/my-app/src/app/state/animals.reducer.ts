import {createReducer, on} from "@ngrx/store";
import {addAnimal, editAnimal, hiddenListOfAnimals, removeAnimal, retrievedAnimalList} from "./animals.actions";
import {AppState, initialState} from "./app.state";

export const animalsReducer = createReducer<AppState>(
  initialState,
  on(retrievedAnimalList, (state, {animalsList}) => {
      return {
        ...state,
        animals: animalsList,
      }
  }),
  on(removeAnimal, (state, {animal}) => {
    return {
      ...state,
      animals: state.animals.filter(pet => pet !== animal),
    }
  }),
  on(addAnimal, (state, {newAnimal}) => {
    return {
      ...state,
      animals: [
        ...state.animals,
        newAnimal
      ]
    }
  }),
  on(editAnimal, (state, {animal}) => {
    return {
      animals: [...state.animals.filter(it => it.id !== animal.id), animal]
    }
  }),
  on(hiddenListOfAnimals, (state: AppState, {typeOfAnimal}) => {
    return {
      ...state,
      currentKindOfAnimal: typeOfAnimal,
    }
  })
);
