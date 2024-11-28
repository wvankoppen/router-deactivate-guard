import { Component, input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-hello",
  standalone: true,
  template: ` <div>Hello {{ id() }}</div> `,
})
export class HelloComponent implements OnDestroy {
  id = input();

  constructor() {
    console.log('HelloComponent.constructor');
  }

  ngOnDestroy(): void {
    console.log('HelloComponent.ngOnDestroy');
  }
}
