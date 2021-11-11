import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AnimalsService} from "../modules/animals/animals.service";
import {Injectable} from "@angular/core";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {fetchRetrievedAnimalList, retrievedAnimalList} from "./animals.actions";

@Injectable()
export class AnimalsEffects {
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
}
