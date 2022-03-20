export const ANIMALSSTUB = [
    {
        kindOfAnimal: "cat",
        animalName: "Лео",
        otherFeatures: "Приучен к лотку",
        hobby: "Нравится бегать",
        gender: "Мальчик",
        breed: "Короткошерстный",
        birthday: "2020-10-09",
        id: 1
    },
    {
        kindOfAnimal: "cat",
        animalName: "Ириска",
        otherFeatures: "Приучена к лотку",
        hobby: "Спокойная",
        gender: "Девочка",
        breed: "Длинношерстная",
        birthday: "2021-01-29",
        id: 2
    },
    {
        kindOfAnimal: "cat",
        animalName: "Ральф",
        otherFeatures: "Приучен к поводку, обучен командам",
        hobby: "Обожает лакомства",
        gender: "Девочка",
        breed: "Короткошерстный",
        birthday: "2020-12-21",
        id: 3,
        age: "2020-12-21"
    },
    {
        kindOfAnimal: "cat",
        animalName: "Дашута",
        otherFeatures: "Приучена к лотку, к когтеточке",
        hobby: "Спокойная",
        gender: "Девочка",
        breed: "Короткошерстная",
        birthday: "2021-04-10",
        id: 4
    },
    {
        kindOfAnimal: "dog",
        animalName: "Микки",
        otherFeatures: "Ладит с детьми",
        hobby: "Нравится бегать",
        gender: "Мальчик",
        breed: "Короткошерстный",
        birthday: "2021-04-08",
        id: 5
    },
    {
        kindOfAnimal: "dog",
        animalName: "Батоня",
        otherFeatures: "Ладит с детьми, приучен к поводку",
        hobby: "Спокойный",
        gender: "Мальчик",
        breed: "Короткошерстный",
        birthday: "2018-10-03",
        id: 6
    },
    {
        kindOfAnimal: "cat",
        animalName: "Дашута",
        otherFeatures: "",
        hobby: "",
        gender: "Девочка",
        breed: "Короткошерстная",
        birthday: "2021-10-21",
        id: 7
    }
];

export class AnimalsService {
    data = ANIMALSSTUB;

    getAnimalsData(){
        return this.data;
    }

    filterAnimalsByType(type){
        return this.data.filter(animal =>{
            return animal.kindOfAnimal !== type;
        })
    }
}
