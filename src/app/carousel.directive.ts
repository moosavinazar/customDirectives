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

  timer;

  @Input('appCarouselAutoplay')
  set autoplay(val: string) {
    val === 'No' ? this.clearAutoPlay() : this.playAutoPlay();
  }

  @Input('appCarouselDelay')
  set delay(val: number) {
    this.clearAutoPlay();
    this.playAutoPlay(val);
  }

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

  public playAutoPlay(delay: number = 1000) {
    this.timer = setInterval(() => {
      this.next();
    }, delay);
  }

  public clearAutoPlay() {
    clearInterval(this.timer);
  }

}
