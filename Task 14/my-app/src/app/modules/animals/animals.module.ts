import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalsComponent} from "./animals.component";
import {AnimalsService} from "./animals.service";
import { AnimalsListItemComponent } from './components/animals-list-item/animals-list-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnimalsFormComponent } from './components/animals-form/animals-form.component';
import {RouterModule} from "@angular/router";
import { AnimalsEditComponent } from './components/animals-edit/animals-edit.component';

@NgModule({
  declarations: [
    AnimalsComponent,
    AnimalsListItemComponent,
    AnimalsFormComponent,
    AnimalsEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AnimalsComponent
  ],
  providers: [
    AnimalsService
  ],
})
export class AnimalsModule { }
