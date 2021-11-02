import {HTMLAttributes} from "react";

export enum AnimalType {
    CAT = "cat",
    DOG = "dog"
}

export enum AnimalGender {
    MALE = "Мальчик",
    FEMALE = "Девочка"
}

export type Animal = {
    kindOfAnimal: AnimalType,
    animalName: string,
    otherFeatures: string,
    hobby: string,
    gender: AnimalGender,
    breed: string,
    birthday: string,
    id: number
}

export type AppProps = Partial<{
    animals: Animal[],
    animal: Animal,
    message: string;
    count: number;
    disabled: boolean;
    names: string[];
    status: "waiting" | "success";
    obj: object;
    obj2: {};
    obj3: {
        id: string;
        title: string;
    };
    objArr: {
        id: string;
        title: string;
    }[];
    onSomething: Function;
    onChange: (id: number) => void;
}> & HTMLAttributes<any>;
