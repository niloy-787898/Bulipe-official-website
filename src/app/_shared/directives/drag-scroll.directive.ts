import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[webDragScroll]'
})
export class DragScrollDirective {

  private isDragging: boolean = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.pageX - this.elementRef.nativeElement.offsetLeft;
    this.scrollLeft = this.elementRef.nativeElement.scrollLeft;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.elementRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust scroll speed here
    this.elementRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

}
