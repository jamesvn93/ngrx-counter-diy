import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import {CommonModule} from "@angular/common";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent {
  // INSTRUCTIONS:
  // Step 1: Create an observable for your counter value.
  // - Use the store's select method and your selector to get the counter value from the store.
  // - Think about what selector you need and how to connect it to your component.
  public counter$: Observable<number> = new Subject<number>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // INSTRUCTIONS:
    // Step 2: Assign your counter observable in ngOnInit.
    // - Use the store's select method here to subscribe to your selector.
    // - What selector will you use to get the counter value?
  }

  // INSTRUCTIONS:
  // Step 3: Implement methods to dispatch your actions to the store.
  // - Create methods for increment, decrement, and reset.
  // - Use the store's dispatch method to send your actions.
  // - What actions will you need to dispatch for each method?
}
