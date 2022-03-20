import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalsComponent} from "./modules/animals/animals.component";
import {AnimalsEditComponent} from "./modules/animals/components/animals-edit/animals-edit.component";

const routes: Routes = [
  {path: "", component: AnimalsComponent},
  {path: "pet/:id", component: AnimalsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
