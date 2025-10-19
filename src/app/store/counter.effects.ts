import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increment, decrement, reset } from './counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  logIncrement$;

  constructor(private actions$: Actions) {
    this.logIncrement$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(increment),
          tap(() => console.log('Increment action dispatched'))
        ),
      { dispatch: false }
    );
  }
}
