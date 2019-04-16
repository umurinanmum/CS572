import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
  <ng-template [ngIf]="param">
  <li>
  {{param}}

  </ng-template>

  `,
  styles: []
})
export class DumbComponent implements OnInit {

  @Input() param:any;
  @Input() obj:any;

  constructor() { }

  ngOnInit() {
  }

}
