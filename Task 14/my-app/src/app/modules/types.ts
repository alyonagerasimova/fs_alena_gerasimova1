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
  birthday: string,
  gender: AnimalGender,
  breed: string,
  hobby: string,
  otherFeatures: string,
  id:number
}
