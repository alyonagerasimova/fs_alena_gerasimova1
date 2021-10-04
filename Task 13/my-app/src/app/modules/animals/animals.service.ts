import {Injectable} from '@angular/core';
import {ANIMALSSTUB} from "./animals.stub";
import {Animal, AnimalType} from "../types";

@Injectable()
export class AnimalsService {
  private readonly data = ANIMALSSTUB;

  public getAnimalsData(): Animal[] {
    return this.data;
  }

  public filterAnimalsByType(type: AnimalType): Animal[] {
    return this.data.filter(animal =>{
      return animal.kindOfAnimal !== type;
    })
  }
}
