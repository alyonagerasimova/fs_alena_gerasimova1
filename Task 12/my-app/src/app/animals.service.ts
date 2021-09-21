import {Injectable} from '@angular/core';

export class Animal {

  constructor(
    protected _kindOfAnimal: string,
    protected _animalName: string,
    protected _age: string,
    protected _gender: string,
    protected _breed: string,
    protected _hobby: string,
    protected _otherFeatures: string,
    protected _details?: string | undefined
  ) {
  }

  get kindOfAnimal(): string {
    return this._kindOfAnimal;
  }

  set kindOfAnimal(value: string) {
    this._kindOfAnimal = value;
  }

  get animalName(): string {
    return this._animalName;
  }

  set animalName(value: string) {
    this._animalName = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get breed(): string {
    return this._breed;
  }

  set breed(value: string) {
    this._breed = value;
  }

  get hobby(): string {
    return this._hobby;
  }

  set hobby(value: string) {
    this._hobby = value;
  }

  get otherFeatures(): string {
    return this._otherFeatures;
  }

  set otherFeatures(value: string) {
    this._otherFeatures = value;
  }

  get details(): string | undefined{
    return this._details;
  }

  set details(value: string | undefined) {
    this._details = value;
  }
}

@Injectable()
export class AnimalsService {
  private data: Animal[] = [
    new Animal("Кот", "Лео", "1 год", "Мальчик", "Короткошерстный",
      "Нравится бегать","Приучен к лотку"),
    new Animal("Котенок", "Ириска", "9 месяцев", "Девочка", "Длинношерстная",
      "Спокойная","Приучена к лотку"),
    new Animal("Щенок", "Ральф", "11 месяцев", "Мальчик", "Короткошерстный",
      "Обожает лакомства","Приучен к поводку, обучен командам"),
    new Animal("Кошка", "Дашута", "6 лет", "Девочка", "Короткошерстный",
      "Спокойная","Приучена к лотку, к когтеточке"),
    new Animal("Щенок", "Микки", "6 месяцев", "Мальчик", "Короткошерстный",
      "Нравится бегать","Ладит с детьми"),
    new Animal("Пес", "Батоня", "3 года", "Мальчик", "Короткошерстный",
      "Спокойный","Ладит с детьми, приучен к поводку"),
    new Animal("Котенок", "Пуншик", "3 месяцев", "Мальчик", "Короткошерстный",
      "Нравится бегать","Ладит с детьми")
  ];

  public getData(): Animal[] {
    return this.data;
  }
}
