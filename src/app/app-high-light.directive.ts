import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @Input() highLightColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: string) {
    // this.element.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

}
