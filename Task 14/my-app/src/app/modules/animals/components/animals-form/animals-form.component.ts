import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal, AnimalGender, AnimalType} from "../../../types";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-animals-form',
  templateUrl: './animals-form.component.html',
  styleUrls: ['./animals-form.component.less']
})
export class AnimalsFormComponent implements OnInit {

  public genders: (AnimalGender.FEMALE | AnimalGender.MALE)[] = [AnimalGender.FEMALE, AnimalGender.MALE];

  @Input()
  public animals!: Animal[];

  @Input()
  public openForm: boolean = true;

  @Output()
  public openFormChange = new EventEmitter<boolean>();

  @Output()
  public newAnimalEvent = new EventEmitter<Animal>();

  public animal: Animal = {
    kindOfAnimal: AnimalType.CAT,
    animalName: "",
    otherFeatures: "",
    hobby: "",
    gender: AnimalGender.MALE,
    breed: "",
    age: 0,
    detailsAge: "",
    id: 8
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewAnimal(animal: Animal) {
    this.newAnimalEvent.emit(animal);
  }

  onChanges(bool: boolean) {
    this.openFormChange.emit(bool);
  }

  submitForm(form: NgForm) {
    if (form.valid) {

      form.reset();
    }
  }

  closeForm() {
    this.openForm = false;
    console.log(this.openForm);
  }
}
