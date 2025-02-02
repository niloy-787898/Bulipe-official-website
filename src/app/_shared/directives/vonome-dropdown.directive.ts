import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[vonomeDropdown]'
})
export class VonomeDropdownDirective {

  @Input() selector: string = ".dropdown-menu";
  @Input() parent: string = ".dropdown-menu-parent";
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const isClickedInside = this.elRef.nativeElement.contains(event.target);
    const dropdown = this.elRef.nativeElement.querySelector(this.selector);

    if (dropdown && !isClickedInside) {
      this.renderer.removeClass(dropdown, 'show');
      this.renderer.addClass(dropdown, 'hide');
      this.renderer.removeClass(dropdown.parentElement, 'active');
    }
  }

  @HostListener('click')
  onToggle() {
    const dropdown = this.elRef.nativeElement.querySelector(this.selector);
    if (dropdown) {
      this.renderer.addClass(dropdown, 'show');
      this.renderer.addClass(dropdown.parentElement, 'active');
      this.renderer.removeClass(dropdown, 'hide');
    }
  }

  @HostListener('blur')
  onBlur() {
    const dropdown = this.elRef.nativeElement.querySelector(this.selector);
    if (dropdown) {
      this.renderer.addClass(dropdown, 'hide');
      this.renderer.removeClass(dropdown.parentElement, 'active');
      this.renderer.removeClass(dropdown, 'show');
    }
  }

}
