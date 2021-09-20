import { Injectable } from '@angular/core';

export class Animal {

  public _kindOfAnimal: string;
  public _animalName: string;
  public _age: number;
  public _weight: number;
  public _details: string = '';

  constructor(kindOfAnimal: string, animalName: string, age: number, weight: number, details?: string) {
    this._kindOfAnimal = kindOfAnimal;
    this._animalName = animalName;
    this._age = age;
    this._weight = weight;

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

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get details(): string{
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }
}

@Injectable()
export class AnimalsService{
   private data: Animal[] = [
    new Animal("Котенок", "Лео", 12, 2),
    new Animal("Котенок", "Ириска", 9, 2),
    new Animal("Щенок", "Ральф", 11, 2),
    new Animal("Щенок", "Микки", 6, 2)
  ];
  public getData(): Animal[] {
    return this.data;
  }
}
