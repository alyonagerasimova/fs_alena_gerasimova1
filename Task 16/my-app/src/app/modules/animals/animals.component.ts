import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";
import {Animal, AnimalType} from "../types";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {
  fetchAddAnimal,
  fetchRemoveAnimal,
  fetchRetrievedAnimalList,
  hiddenListOfAnimals,
  removeAnimal
} from "../../state/animals.actions";
import {selectAnimalCollection} from "../../state/animals.selectors";
import {State} from "../../reducers";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.less'],
})
export class AnimalsComponent implements OnInit {

  public _animalsList$: Observable<Animal[]> = this.store.pipe(
    select('animalsList'),
    select(selectAnimalCollection)
  );

  public _isKittenHide$: Observable<boolean> = this.store.select(state => state.animalsList.currentKindOfAnimal === AnimalType.CAT);
  public _isLoading$: Observable<boolean> = this.store.select(state => state.animalsList.isLoading || false);

  public openForm: boolean = false;

  //public animalsList: Animal[] = [];

  constructor(private store: Store<State>, private animalsService: AnimalsService) {
    this.store.subscribe(console.log);
  }

  ngOnInit() {
    // this._animalsList$ = this.store
    //   .pipe(
    //     select(state => state.currentKKindOfAnimal ? state.animals.filter(animal => animal.kindOfAnimal !== state.currentKKindOfAnimal) : state.animals),
    //   );

    this.store.dispatch(fetchRetrievedAnimalList())
  }

  public hideKittens() {
    this.store.dispatch(hiddenListOfAnimals({typeOfAnimal: AnimalType.CAT}))
  }

  public showKittens() {
    this.store.dispatch(hiddenListOfAnimals({typeOfAnimal: null}))
  }

  public trackByFn(index: number, animal: Animal): number {
    return animal.id;
  }

  public createNewAnimals() {
    this.openForm = true;
  }

  public onAdd(newAnimal: Animal) {
    this.store.dispatch(fetchAddAnimal({newAnimal}));
  }

  public onRemove(animal: Animal) {
    if (confirm("Вы действительно хотите удалить этого питомца?")){
      this.store.dispatch(fetchRemoveAnimal({animal}));
    }

  }

  // public add(newAnimal: Animal) {
  //   this.animalsService.addAnimal(newAnimal)
  //     .subscribe(animal => this.animalsList.push(animal));
  // }

  // public delete(animal: Animal): void {
  //   if(confirm("Вы действительно хотите удалить этого питомца?")){
  //     this.animalsList = this.animalsList.filter(pet => pet !== animal);
  //     this.animalsService.deleteAnimal(animal.id).subscribe();
  //   }
  // }
}
