import {Injectable} from '@angular/core';
import {ANIMALSSTUB} from "./animals.stub";
import {Animal, AnimalType} from "../types";
import {Observable, of} from "rxjs";

@Injectable()
export class AnimalsService {
  private readonly data = ANIMALSSTUB;

  public getAnimalsData(): Observable<Animal[]> {
    return of(this.data);
    //return this.http.get<Hero[]>(this.heroesUrl)
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
