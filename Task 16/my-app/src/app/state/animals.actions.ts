import {createAction, props} from "@ngrx/store";
import {Animal, AnimalType} from "../modules/types";
import {FormGroup} from "@angular/forms";

export const addAnimal = createAction(
  'AddNewAnimal',
  props<{ newAnimal: Animal }>()
);
export const removeAnimal = createAction(
  'RemoveAnimal',
  props<{ animal: Animal }>()
);
export const editAnimal = createAction(
  'EditAnimal',
  props<{ animal: Animal }>()
);

export const hiddenListOfAnimals = createAction(
  'HiddenAnimalList',
  props<{ typeOfAnimal: AnimalType | null }>()
);

export const retrievedAnimalList = createAction(
  'AnimalList',
  props<{ animalsList: Animal[] }>()
);

export const fetchAddAnimal = createAction(
  'fetchAddNewAnimal',
  props<{ newAnimal: Animal }>()
);
export const fetchRemoveAnimal = createAction(
  'fetchRemoveAnimal',
  props<{ animal: Animal }>()
);
export const fetchEditAnimal = createAction(
  'fetchEditAnimal',
  props<{ formModel: FormGroup }>()
);

export const fetchRetrievedAnimalList = createAction('fetchAnimalList');
