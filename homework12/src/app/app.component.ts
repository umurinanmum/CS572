import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-counter [counter]="5" (counterChange)="updateCounter($event)" ></app-counter> Component Counter Value : {{componentCounterValue}}',
  styles: []
})
export class AppComponent {

  componentCounterValue: number = 0;

  updateCounter(currentValue) {
    debugger;
    this.componentCounterValue = currentValue;
  }

  title = 'assignment12';

}
