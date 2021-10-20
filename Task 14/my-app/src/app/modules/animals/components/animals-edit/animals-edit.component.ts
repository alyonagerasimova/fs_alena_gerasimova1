import {Component, Input, OnInit} from '@angular/core';
import {Animal, AnimalGender} from "../../../types";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {AnimalsService} from "../../animals.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['../animals-form/animals-form.component.less']
})
export class AnimalsEditComponent implements OnInit {
  public genders: (AnimalGender.FEMALE | AnimalGender.MALE)[] = [AnimalGender.FEMALE, AnimalGender.MALE];
  public submitted = false;
  public formModel!: FormGroup;
  public animal!: Animal;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
     this.route.params.pipe((params: Params) => {
        return this.animalsService.getAnimalById(+params.id);
      }).subscribe(animal => {
       this.animal = animal;
     });

    this.formModel = this.fb.group({
      animalName: [this.animal.animalName],
      breed: [this.animal.breed],
      kindOfAnimal: [this.animal.kindOfAnimal],
      gender: [this.animal.gender],
      age: [this.animal.age],
      detailsAge: [this.animal.detailsAge],
      hobby: [this.animal.hobby],
      otherFeatures: [this.animal.otherFeatures],
    });
  }


  onSubmit() {
    this.submitted = true;
  }
}
