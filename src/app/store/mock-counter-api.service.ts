import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockCounterApiService {
  increment(current: number): Observable<number> {
    // Simulate a successful API call with a delay and random failure
    return this.failRandomly(of(current + 1).pipe(delay(500)));
  }

  decrement(current: number): Observable<number> {
    // Simulate a successful API call with a delay and random failure
    return this.failRandomly(of(current - 1).pipe(delay(500)));
  }

  reset(): Observable<number> {
    // Simulate a successful API call with a delay and random failure
    return this.failRandomly(of(0).pipe(delay(500)));
  }

  failRandomly<T>(obs: Observable<T>): Observable<T> {
    // 20% chance to fail
    return Math.random() < 0.2 ? throwError(() => new Error('Random API error')) : obs;
  }
}
