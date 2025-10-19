import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CounterState } from './counter.state';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};
