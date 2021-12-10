import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorfulDirective } from './colorful.directive';
import { AppHighLightDirective } from './app-high-light.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorfulDirective,
    AppHighLightDirective,
    CarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
