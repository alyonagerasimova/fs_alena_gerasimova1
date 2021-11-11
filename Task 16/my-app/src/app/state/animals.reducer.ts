import {AnimalsDataService} from "../services/animal.data.service";
import {createReducer, on} from "@ngrx/store";
import {Observable} from "rxjs";
import {Animal, AnimalType} from "../modules/types";
import {addAnimal, editAnimal, hiddenListOfAnimals, removeAnimal, retrievedAnimalList} from "./animals.actions";
import {AnimalsService} from "../modules/animals/animals.service";


export const initialStateList: Animal[] = [];

export const animalsReducer = createReducer(
  initialStateList,
  on(retrievedAnimalList, (state, {animalsList}) => animalsList),

  on(removeAnimal, (state, {animal}) => {
    if (confirm("Вы действительно хотите удалить этого питомца?")) {
      return state.filter(pet => pet !== animal)
    }
    return state;
  }),
  on(addAnimal, (state, {newAnimal}) => [...state, newAnimal]),
  on(editAnimal, (state, {formModel}) => [...state, formModel.value]),
  on(hiddenListOfAnimals, (state, {typeOfAnimal}) => {
    return state.filter(animal => {
      return animal.kindOfAnimal !== typeOfAnimal;
    })
  })
);
