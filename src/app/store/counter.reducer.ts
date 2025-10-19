import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CounterState, initialCounterState } from './counter.state';

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({ ...state, value: state.value + 1 })),
  on(decrement, (state) => ({ ...state, value: state.value - 1 })),
  on(reset, (state) => ({ ...state, value: 0 }))
);
