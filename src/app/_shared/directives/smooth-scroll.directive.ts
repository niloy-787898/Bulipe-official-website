import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  constructor() {}

  @HostListener('click')
  onClick(): void {
    const belowSection = document.querySelector('#belowSection');
    if (belowSection) {
      belowSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
