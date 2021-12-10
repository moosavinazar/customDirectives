import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red';
  images: string[] = ['/assets/pic01.jpeg', '/assets/pic02.jpeg', '/assets/pic03.jpeg'];
}
