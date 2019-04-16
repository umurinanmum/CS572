import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div [ngStyle]= "{'font-style' : '20px;'}"  [isVisible] = "visibility" makeBigger> Umur Inan </div>
  
  <app-smart [dumbs]="arr" [objs]="objs">
</app-smart>
  
  `,
  styles: ['div {font-size :20px}']
})
export class AppComponent {
  title = 'assignment13';
  visibility = 'true';

  arr = [3,2,4,5,'umur',7.0];
  objs = {3:true,2:false,4:true,5:false,'umur':true,7.0:true};
}
