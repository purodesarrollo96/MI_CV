import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(){
    setInterval
  }

  getSuma(num1: number, num2: number){
    return num1 + num2;
  }
}
