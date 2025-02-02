import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective {
  @Input() isOpen = false;
  @HostBinding('class.open') get openClass() { return this.isOpen; }

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleAccordion() {
    this.isOpen = !this.isOpen;
    this.closeOtherAccordions(this.elementRef.nativeElement.parentElement);
  }

  private closeOtherAccordions(parentElement: HTMLElement): void {
    const accordionItems = parentElement.querySelectorAll('.accordion-item');
    accordionItems.forEach((item: Element) => {
      if (item !== parentElement) {
        const headingElement = item.querySelector('.accordion-heading');
        const contentElement = item.querySelector('.accordion-content');
        if (headingElement && contentElement) {
          (headingElement as HTMLElement).classList.remove('open');
          (contentElement as HTMLElement).style.display = 'none';
        }
      }
    });
  }
}
