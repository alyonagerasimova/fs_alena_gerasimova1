import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";
import {Animal, AnimalType} from "../types";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less'],
})
export class AnimalsComponent implements OnInit {

  public _isKittensShow: boolean = true;
  public _animals: Animal[] = this.animalsService.getAnimalsData();

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit() {
  }

  hideKittens() {
    this._isKittensShow = false;
    this._animals = this.animalsService.filterAnimalsByType(AnimalType.CAT);
  }

  showKittens() {
    this._isKittensShow = true;
    this._animals = this.animalsService.getAnimalsData();
  }

  public trackByFn(index: number, animal: Animal): string {
    return animal.kindOfAnimal + animal.animalName + animal.age;
  }
}
