import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})


export class IsVisibleDirective implements OnChanges{

  @Input() isVisible: string;

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    if (this.isVisible === 'false') {
      renderer2.setStyle(element.nativeElement, 'display', 'none');
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.isVisible === 'false') {
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
    }else{
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'block');
    }
  }

}
