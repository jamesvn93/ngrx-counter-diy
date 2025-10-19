
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import your actions here
// import { increment } from './counter.actions';
// import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
	// INSTRUCTIONS:
	// Implement your NgRx effects here using createEffect and ofType.
	// Example:
	// logIncrement$ = createEffect(() =>
	//   this.actions$.pipe(
	//     ofType(increment),
	//     tap(() => console.log('Increment action dispatched'))
	//   ),
	//   { dispatch: false }
	// );

	// Tip: Effects handle side effects like API calls or logging. Try creating an effect that logs when the counter is incremented.
  // https://ngrx.io/guide/effects

	constructor(private actions$: Actions) {}
}
