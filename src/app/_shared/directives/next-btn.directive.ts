import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[webNextBtn]'
})
export class NextBtnDirective {

  constructor(private elRef: ElementRef) { 
    
  }

  @HostListener('click')
  
  NextFunc(){
    
    
    const elm =this.elRef.nativeElement.parentElement.parentElement.children[0];
    const option = elm.getElementsByClassName("option");
    elm.append(option[0])

  }


}
