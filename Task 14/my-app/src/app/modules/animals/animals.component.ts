import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";
import {Animal, AnimalType} from "../types";
import {Routes} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less'],
})
export class AnimalsComponent implements OnInit {

  public _isKittensShow: boolean = true;
  public _animals: Animal[] = [];
  public openForm: boolean = false;

  //public submitted: boolean = false;

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit() {
  }

  public hideKittens() {
    this._isKittensShow = false;
    this._animals = this.animalsService.filterAnimalsByType(AnimalType.CAT);
  }

  public showKittens() {
    this._isKittensShow = true;
    this.animalsService.getAnimalsData().subscribe(animals => {
      this._animals = animals;
    })
  }

  public trackByFn(index: number, animal: Animal): number {
    return animal.id;
  }

  public createNewAnimals() {
    //this.router.navigate(['/animals-forms']);
    this.openForm = true;
    //this.submitted = false;
  }

  updateAnimalsList(newAnimal: Animal) {
    newAnimal.id = this._animals.length + 1;
    this._animals.push(newAnimal);
    console.log(this._animals);
  }
}
