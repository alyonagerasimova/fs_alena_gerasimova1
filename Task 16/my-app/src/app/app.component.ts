import {Component, OnInit} from '@angular/core';
import {subscribeToResult} from "rxjs/internal-compatibility";
import {Store} from "@ngrx/store";
import {AnimalsService} from "./modules/animals/animals.service";
import {addAnimal, removeAnimal, retrievedAnimalList} from "./state/animals.actions";
import {selectAnimalCollection, selectAnimals} from "./state/animals.selectors";
import {Animal} from "./modules/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public myClass = "main";

  animalsList$ = this.store.select(selectAnimals);

  onAdd(newAnimal: Animal) {
    this.store.dispatch(addAnimal({newAnimal}));
  }

  onRemove(animal: Animal) {
    this.store.dispatch(removeAnimal({animal}));
  }

  constructor(
    private store: Store,
    private animalsService: AnimalsService
  ) {}

  ngOnInit() {
    this.animalsService
      .getAnimalsData()
      .subscribe(animalsList => this.store.dispatch(retrievedAnimalList({animalsList})));
  }
}
