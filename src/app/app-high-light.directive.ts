import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {

  constructor(private element: ElementRef) { }

  @Input() highLightColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
  }

}
