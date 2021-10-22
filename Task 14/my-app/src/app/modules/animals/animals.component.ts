import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";
import {Animal, AnimalType} from "../types";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less'],
})
export class AnimalsComponent implements OnInit {

  public loadingComplete = false;
  public _isKittensShow: boolean = true;
  public animalsObservable: Observable<Animal[]> = this.animalsService.getAnimalsData();
  public openForm: boolean = false;
  public animalsList: Animal[] = [];

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit() {
    this.animalsService.getAnimalsData()
      .subscribe(animals => {
        this.animalsList = animals;
        this.loadingComplete = true;
      });
  }

  public hideKittens() {
    this._isKittensShow = false;
    this.animalsList = this.animalsService.filterAnimalsByType(AnimalType.CAT);
  }

  public showKittens() {
    this._isKittensShow = true;
    this.animalsList = this.animalsService.data;
  }

  public trackByFn(index: number, animal: Animal): number {
    return animal.id;
  }

  public createNewAnimals() {
    this.openForm = true;
  }

  public add(newAnimal: Animal) {
    this.animalsService.addAnimal(newAnimal)
      .subscribe(animal => this.animalsList.push(animal));
  }

  public delete(animal: Animal): void {
    if(confirm("Вы действительно хотите удалить этого питомца?")){
      this.animalsList = this.animalsList.filter(pet => pet !== animal);
      this.animalsService.deleteAnimal(animal.id).subscribe();
    }
  }
}
