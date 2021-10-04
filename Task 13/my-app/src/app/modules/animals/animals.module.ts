import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalsComponent} from "./animals.component";
import {AnimalsService} from "./animals.service";
import { AnimalsListItemComponent } from './components/animals-list-item/animals-list-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AnimalsComponent,
    AnimalsListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AnimalsComponent
  ],
  providers: [
    AnimalsService
  ],
})
export class AnimalsModule { }
