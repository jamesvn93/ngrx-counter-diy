
import { createReducer } from '@ngrx/store';
import { CounterState, initialCounterState } from './counter.state';

// INSTRUCTIONS:
// Implement your NgRx reducer logic here using createReducer and on.
// Add your on(...) handlers for actions below.

export const counterReducer = createReducer(
	initialCounterState
	// Add your on(...) handlers here, e.g.:
	// on(increment, (state) => ({ ...state, value: state.value + 1 }))
);

// Tip: Reducers handle state changes based on actions. Try handling increment, decrement, and reset actions.
// https://ngrx.io/guide/store/reducers
