import {ANIMALSSTUB} from "./animals.stub";
import {Animal, AnimalType} from "../module/types";

export class AnimalsService {
    private readonly data = ANIMALSSTUB;

    public getAnimalsData(): Animal[] {
        return this.data;
    }

    public filterAnimalsByType(type: AnimalType): Animal[] {
        return this.data.filter(animal => {
            return animal.kindOfAnimal !== type;
        });
    }

    public generateId(): number {
        return this.data.length > 0 ? Math.max(...this.data.map(animal => animal.id)) + 1 : 1;
    }

    public getAnimalById(id: number){
        return this.data.find(animal => {
            return animal.id === id;
        })
    }
}
