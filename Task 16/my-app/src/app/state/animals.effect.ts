import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AnimalsService} from "../modules/animals/animals.service";
import {Injectable} from "@angular/core";
import {catchError, map, switchMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {
  addAnimal,
  fetchAddAnimal,
  fetchRemoveAnimal,
  fetchRetrievedAnimalList, removeAnimal,
  retrievedAnimalList
} from "./animals.actions";
import {Animal} from "../modules/types";

@Injectable()
export class AnimalsEffects {

  private animalId : number | undefined;

  constructor(private actions$: Actions,
              private animalsService: AnimalsService,
  ) {}

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(fetchRetrievedAnimalList),
    switchMap(() => {
       return this.animalsService
          .getAnimalsData();
    }),
      map((animalsList) => {
        return retrievedAnimalList({animalsList})
      }),
      catchError(() => {
        console.error('error');
        return EMPTY;
      })
    ));

  loadDataWithNewAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(fetchAddAnimal),
    switchMap(({newAnimal}) => {
      return this.animalsService
        .addAnimal(newAnimal);
    }),
    map((newAnimal: Animal) => {
      return addAnimal({newAnimal})
    }),
    catchError(() => {
      console.error('error');
      return EMPTY;
    })
  ));

  loadDataWithoutDeletedAnimal$ = createEffect(() => this.actions$.pipe(
    ofType(fetchRemoveAnimal),
    switchMap(({animal}) => {
      this.animalId = animal.id;
      return this.animalsService
        .deleteAnimal(animal);
    }),
    map(() => {
      return removeAnimal({
        animalId: this.animalId || -1
      })
    }),
    catchError(() => {
      console.error('error');
      return EMPTY;
    })
  ));
}
