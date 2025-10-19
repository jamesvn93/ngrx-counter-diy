import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MockCounterApiService} from "./mock-counter-api.service";
// import your actions here
// import { increment } from './counter.actions';
// import { switchMap, map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private mockApi: MockCounterApiService
  ) {
    // INSTRUCTIONS:
    // Use the MockCounterApiService to simulate API calls in your effects.
    // 1. Inject MockCounterApiService in the constructor (see below).
    // 2. Use createEffect to listen for actions (e.g., increment).
    // 3. Call the appropriate method on the mock API service (e.g., increment(currentValue)).
    // 4. Dispatch a success or failure action based on the result.
    // 5. Use switchMap, map, and catchError from rxjs/operators as needed.
    // Example (not complete!):
    // createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(increment),
    //     switchMap(() => this.mockApi.increment(/* pass current value here */)
    //       .pipe(
    //         map(newValue => /* dispatch success action with newValue */),
    //         catchError(error => of(/* dispatch failure action */))
    //       )
    //     )
    //   )
    // );
    // Tip: Effects handle side effects like API calls. Use the mock service to simulate these calls.
    // https://ngrx.io/guide/effects
  }
}
