import {Injectable} from '@angular/core';
import {Animal, AnimalType} from "../types";
import {Observable, of, throwError} from "rxjs";
import {AnimalsDataService} from "../../services/animal.data.service";
import {catchError, tap} from "rxjs/operators";


@Injectable()
export class AnimalsService {
  public data: Animal[] = [];

  constructor(private animalsDataService: AnimalsDataService) {
  }

  public getAnimalsData(): Observable<Animal[]> {
    return this.animalsDataService.getAnimals()
      .pipe(
        tap(values => {
          this.data = values;
        }),
        catchError(err => {
          console.error(err);
          alert("Ошибка получения данных");
          return [];
        })
      );
  }

  public filterAnimalsByType(type: AnimalType): Animal[] {
    return this.data.filter(animal => {
      return animal.kindOfAnimal !== type;
    })
  }

  public generateId(): number {
    return this.data.length > 0 ? Math.max(...this.data.map(animal => animal.id)) + 1 : 11;
  }

  public getAnimalById(id: string): Observable<Animal> {
    return this.animalsDataService.getAnimalById(id)
      .pipe(
        catchError(err => {
          console.error(err);
          alert("Ошибка получения животного по id");
          return throwError(err);
        })
      );
  }

  public addAnimal(newAnimal: Animal): Observable<Animal> {
    return this.animalsDataService.addAnimal(newAnimal)
      .pipe(
        catchError(err => {
          console.error(err);
          alert("Ошибка добавления животного");
          return throwError(err);
        })
      );
  }

  public deleteAnimal(id: number): Observable<Animal> {
    return this.animalsDataService.deleteAnimal(id)
      .pipe(
        catchError(err => {
          console.error(err);
          alert("Ошибка удаления животного");
          return throwError(err);
        })
      );
  }

  public updateAnimal(editAnimal: Animal): Observable<Animal> {
    return this.animalsDataService.updateAnimal(editAnimal)
      .pipe(
        catchError(err => {
          console.error(err);
          alert("Ошибка обновления животного");
          return throwError(err);
        })
      );
  }
}
