import {Injectable} from '@angular/core';
import {Animal, AnimalType} from "../types";
import {Observable, of} from "rxjs";
import {AnimalsDataService} from "../../services/animal.data.service";
import {tap} from "rxjs/operators";


@Injectable()
export class AnimalsService {
  public data: Animal[] = [];

  constructor(private animalsDataService: AnimalsDataService) {
  }

  public getAnimalsData(): Observable<Animal[]> {
    return this.animalsDataService.getAnimals()
      .pipe(tap(values => {
        this.data = values;
      }));
  }

  public filterAnimalsByType(type: AnimalType): Animal[] {
    return this.data.filter(animal => {
      return animal.kindOfAnimal !== type;
    })
  }

  public getAnimalById(id: string): Observable<Animal> {
    return this.animalsDataService.getAnimalById(id);
  }

  public addAnimal(newAnimal: Animal): Observable<Animal> {
    return this.animalsDataService.addAnimal(newAnimal)
  }

  public deleteAnimal(id: number): Observable<Animal> {
    return this.animalsDataService.deleteAnimal(id);
  }

  public updateAnimal(editAnimal: Animal): Observable<any> {
    return this.animalsDataService.updateAnimal(editAnimal);
  }
}
