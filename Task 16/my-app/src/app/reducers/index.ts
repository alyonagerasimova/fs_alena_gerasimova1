import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {animalsReducer} from "../state/animals.reducer";
import {AppState} from "../state/app.state";

export interface State {
  animalsList: AppState
}

export const reducers: ActionReducerMap<State> = {
  animalsList: animalsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
