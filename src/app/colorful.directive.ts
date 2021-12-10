import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColors = ['#AA4339', '#FFB2AA', '#D4746A', '#801F15', '#550800',
    '#AA7039', '#FFD3AA', '#D49E6A', '#804915', '#552900',
    '#255E69', '#6A959D', '#437983', '#0F444F', '#012C34',
    '#2B803E', '#80C18F', '#50A162', '#106022', '#00400E'];

  @HostBinding('style.color') color: string = this.availableColors[0];
  @HostBinding('style.border-color') borderColor: string = this.availableColors[0];
  @HostListener('keydown') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randomColorIndex];
  }

}


