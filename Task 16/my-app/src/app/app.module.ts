import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {AnimalsModule} from "./modules/animals/animals.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {animalsReducer} from "./state/animals.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {AnimalsEffects} from "./state/animals.effect";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AnimalsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AnimalsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
