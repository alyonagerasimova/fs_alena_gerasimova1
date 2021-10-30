import {ANIMALSSTUB} from "./animals.stub";
import {Animal, AnimalType} from "../components/types";

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
