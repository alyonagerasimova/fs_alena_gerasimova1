import {Animal, AnimalGender, AnimalType} from "../types";

export const ANIMALSSTUB: Animal[] = [
  {
    kindOfAnimal: AnimalType.CAT,
    animalName: "Лео",
    otherFeatures: "Приучен к лотку",
    hobby: "Нравится бегать",
    gender: AnimalGender.MALE,
    breed: "Короткошерстный",
    age: 1,
    detailsAge: "год",
    id:1
  }, {
    kindOfAnimal: AnimalType.CAT,
    animalName: "Ириска",
    otherFeatures: "Приучена к лотку",
    hobby: "Спокойная",
    gender: AnimalGender.FEMALE,
    breed: "Длинношерстная",
    age: 9,
    detailsAge: "месяцев",
    id:2
  },  {
    kindOfAnimal: AnimalType.DOG,
    animalName: "Ральф",
    otherFeatures: "Приучен к поводку, обучен командам",
    hobby: "Обожает лакомства",
    gender: AnimalGender.MALE,
    breed: "Короткошерстный",
    age: 11,
    detailsAge: "месяцев",
    id:3
  },  {
    kindOfAnimal: AnimalType.CAT,
    animalName: "Дашута",
    otherFeatures: "Приучена к лотку, к когтеточке",
    hobby: "Спокойная",
    gender: AnimalGender.FEMALE,
    breed: "Короткошерстная",
    age: 6,
    detailsAge: "месяцев",
    id:4
  },  {
    kindOfAnimal: AnimalType.DOG,
    animalName: "Микки",
    otherFeatures: "Ладит с детьми",
    hobby: "Нравится бегать",
    gender: AnimalGender.MALE,
    breed: "Короткошерстный",
    age: 6,
    detailsAge: "месяцев",
    id:5
  },{
    kindOfAnimal: AnimalType.DOG,
    animalName: "Батоня",
    otherFeatures: "Ладит с детьми, приучен к поводку",
    hobby: "Спокойный",
    gender: AnimalGender.MALE,
    breed: "Короткошерстный",
    age: 3,
    detailsAge: "года",
    id:6
  },{
    kindOfAnimal: AnimalType.CAT,
    animalName: "Пуншик",
    otherFeatures: "Ладит с детьми",
    hobby: "Нравится бегать",
    gender: AnimalGender.MALE,
    breed: "Короткошерстный",
    age: 3,
    detailsAge: "месяца",
    id:7
  }
];
