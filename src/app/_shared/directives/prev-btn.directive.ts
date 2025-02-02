import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[webPrevBtn]'
})
export class PrevBtnDirective {

  constructor(private elRef: ElementRef) { 
    
  }

  @HostListener('click')

  PrevFunc(){
    const elm =this.elRef.nativeElement.parentElement.parentElement.children[0];
    const option = elm.getElementsByClassName("option");
    elm.prepend(option[option.length -1])
    console.log(elm)
  }



}
