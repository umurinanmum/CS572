import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <input type='button' value='-' (click)='decrement()' />
   {{counterValue}}
   <input type='button' value='+' (click)='increment()'/>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange: EventEmitter;

  counterValue = 0;

  decrement() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  constructor() { 
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
    this.counterValue =this.counter || 3;
  }

}
