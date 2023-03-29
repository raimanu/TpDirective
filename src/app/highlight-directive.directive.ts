import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightable]'
})
export class HighlightDirectiveDirective {

  @Input() highlightColor: string = 'red';

  constructor(protected elem: ElementRef) {
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
    this.elem.nativeElement.style.border = '3px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
    this.elem.nativeElement.style.border = '';
  }

  protected highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
