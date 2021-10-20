import {Injectable} from '@angular/core';
import {Animal, AnimalType} from "../types";
import {Observable, of} from "rxjs";
import {AnimalsDataService} from "../../services/animal.data.service";
import {tap} from "rxjs/operators";


@Injectable()
export class AnimalsService {
  private data: Animal[] = [];


  constructor(private animalsDataService: AnimalsDataService) {
  }

  public getAnimalsData(): Observable<Animal[]> {
    return this.animalsDataService.getAnimalsData()
      .pipe(tap(values => {
        this.data = values;
      }));
  }

  public filterAnimalsByType(type: AnimalType): Animal[] {
    return this.data.filter(animal => {
      return animal.kindOfAnimal !== type;
    })
  }

  public getAnimalById(id: number): Observable<Animal> {
    // @ts-ignore
    return of(this.data.find(animal => animal.id === id));
  }
}
