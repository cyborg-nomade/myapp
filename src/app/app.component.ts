import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text:string;

  constructor(){
    this.text = 'Hello';
  }

  clicked (event) {
    console.log(event);
    this.text='Button clicked'
  }

  showText (event) {
    //console.log(event.target.value);
    console.log(this.text);
  }
}
