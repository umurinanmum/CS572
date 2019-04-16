import { Directive, OnChanges, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {
  currentSize = 20;
  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.element.nativeElement, 'fontSize', `${this.currentSize}px`);

  }

  @HostListener('dblclick') doIt() {
    this.currentSize = this.currentSize + 2;

    //console.log(this.element.nativeElement.style.fontSize);
    // debugger;
    this.renderer2.setStyle(this.element.nativeElement, 'fontSize', `${this.currentSize}px`);
  }

}
