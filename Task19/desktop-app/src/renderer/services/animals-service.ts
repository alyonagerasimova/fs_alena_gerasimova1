import { ANIMALSSTUB } from './animals.stub';
import { Animal, AnimalType } from '../module/types';

export class AnimalsService {
  private data = ANIMALSSTUB;

  public getAnimalsData(): Animal[] {
    return this.data;
  }

  public filterAnimalsByType(type: AnimalType): Animal[] {
    return this.data.filter((animal) => {
      return animal.kindOfAnimal !== type;
    });
  }

  public generateId(): number {
    return this.data.length > 0
      ? Math.max(...this.data.map((animal) => animal.id)) + 1
      : 1;
  }

  public getAnimalById(id: number | string): Animal {
    // eslint-disable-next-line eqeqeq
    return <Animal>this.data.find((animal) => animal.id == id);
  }

  public updateAnimal(value: any): void {
    this.data = [...this.data.filter((animal) => animal.id != value.id), value];
  }
}

export const appAnimalsService = new AnimalsService();
