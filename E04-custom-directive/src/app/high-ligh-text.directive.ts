import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLighText]'
})
export class HighLighTextDirective {

  private elemRef: ElementRef;

  constructor(elemRef: ElementRef) { 
    this.elemRef=elemRef;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elemRef.nativeElement.style.backgroundColor='yellow';
  }

   @HostListener('mouseleave') onMouseLeave(){
    this.elemRef.nativeElement.style.backgroundColor=null;
  }


}
