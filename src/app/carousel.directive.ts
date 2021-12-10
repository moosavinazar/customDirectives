import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./interfaces/app-interface";

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit{

  context!: ICarouselContext;
  index: number = 0;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouselFrom') images!: string[];

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  public next() {
    this.index++;
    console.log(this.index)
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  public prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }

}
