import {createAction, props} from "@ngrx/store";
import {Animal, AnimalType} from "../modules/types";
import {FormGroup} from "@angular/forms";

export const addAnimal = createAction(
  '[Animals List] Add Animal',
  props<{ newAnimal: Animal }>()
);
export const removeAnimal = createAction(
  '[Animals List] Remove Animal',
  props<{ animal: Animal }>()
);
export const editAnimal = createAction(
  '[Animal] Edit Animal',
  props<{ formModel: FormGroup }>()
);

export const hiddenListOfAnimals = createAction(
  '[Animals List] Hide Type',
  props<{ typeOfAnimal: AnimalType }>()
);

export const retrievedAnimalList = createAction(
  '[Animals List/API] Retrieve Animals Success',
  props<{ animalsList: Animal[] }>()
);
