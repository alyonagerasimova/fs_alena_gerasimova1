import {Component, Input, OnInit} from '@angular/core';
import {Animal, AnimalGender} from "../../../types";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {AnimalsService} from "../../animals.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['../animals-form/animals-form.component.less']
})
export class AnimalsEditComponent implements OnInit {
  public genders = [AnimalGender.FEMALE, AnimalGender.MALE];
  public formModel!: FormGroup;
  public animal!: Animal;


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.animalsService.getAnimalById(params.get("id") || "");
        })
      )
      .subscribe(animal => {
        this.animal = animal;
        this.formModel = this.formBuilder.group({
          animalName: this.animal.animalName,
          breed: this.animal.breed,
          kindOfAnimal: this.animal.kindOfAnimal,
          gender: this.animal.gender,
          age: this.animal.age,
          detailsAge: this.animal.detailsAge,
          hobby: this.animal.hobby,
          otherFeatures: this.animal.otherFeatures,
        });
      });
  }

  save(event: Event) {
    this.animalsService.updateAnimal(this.formModel.value);
    console.log(this.formModel);
  }
}
