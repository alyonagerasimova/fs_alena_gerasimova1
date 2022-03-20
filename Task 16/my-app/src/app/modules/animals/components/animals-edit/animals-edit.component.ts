import {Component, Input, OnInit} from '@angular/core';
import {Animal, AnimalGender, AnimalType} from "../../../types";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AnimalsService} from "../../animals.service";
import {switchMap} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-animals-edit',
  templateUrl: './animals-edit.component.html',
  styleUrls: ['./animals-edit.component.less']
})
export class AnimalsEditComponent implements OnInit {

  public genders = [AnimalGender.FEMALE, AnimalGender.MALE];
  public types = [AnimalType.CAT, AnimalType.DOG];
  public formModel!: FormGroup;
  public animal!: Animal;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private animalsService: AnimalsService,
              private location: Location) {
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
          animalName: [this.animal.animalName, [Validators.required, Validators.minLength(2)]],
          breed: [this.animal.breed, [Validators.required, Validators.minLength(2)]],
          kindOfAnimal: [this.animal.kindOfAnimal, [Validators.required, Validators.minLength(2)]],
          gender: [this.animal.gender, Validators.required],
          birthday: [this.animal.birthday, [Validators.required, this.dateValidator]],
          hobby: this.animal.hobby,
          otherFeatures: this.animal.otherFeatures,
        });
      });
  }

  public dateValidator(control: FormControl): {[s:string]:boolean}|null{

    if(control.value > new Date().toISOString().substr(0,10)){
      return {"birthday": true};
    }
    return null;
  }

  public goBack(): void {
    this.location.go("/");
  }

  public onSave(): void {
    this.animalsService.updateAnimal({
      ...this.animal,
      ...this.formModel.value
    })
      .subscribe(() => this.goBack());
  }
}
