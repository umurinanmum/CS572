import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `<ng-container>
  <ng-template [ngIf]="dumbs">
  <app-dumb *ngFor="let dumb of dumbs" [param]="dumb">
  </app-dumb>
</ng-template>
</ng-container>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  @Input() dumbs: any;
  @Input() objs: any;

  constructor() { }

  ngOnInit() {
  }

}
