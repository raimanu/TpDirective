import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightable]'
})
export class HighlightDirectiveDirective {

  @Input() highlightColor: string = 'red';

  constructor(protected elem: ElementRef) {
    this.elem.nativeElement.style.border = '3px solid black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }

  protected highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
