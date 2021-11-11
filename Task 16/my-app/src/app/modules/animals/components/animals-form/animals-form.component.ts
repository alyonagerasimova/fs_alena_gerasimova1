import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal, AnimalGender, AnimalType} from "../../../types";
import {NgForm} from "@angular/forms";
import {AnimalsService} from "../../animals.service";

@Component({
  selector: 'app-animals-form',
  templateUrl: './animals-form.component.html',
  styleUrls: ['./animals-form.component.less']
})
export class AnimalsFormComponent implements OnInit {

  public genders = [AnimalGender.FEMALE, AnimalGender.MALE];
  public types = [AnimalType.CAT, AnimalType.DOG];
  public dateNow: string = new Date().toISOString().substr(0,10);

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
    birthday: this.dateNow,
    id: this.animalsService.generateId()
  };

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
  }

  addNewAnimal(animal: Animal) {
    this.newAnimalEvent.emit(animal);
    this.openForm = false;
    this.onChanges(this.openForm);
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
    this.onChanges(this.openForm);
  }
}
