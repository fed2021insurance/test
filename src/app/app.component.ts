import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentCom = 'parent data';
  childCom = '';
  countStart = 0;
  name = 'kevin';
  city = 'Atlanta';
  age = 30;

  myChildMess(event) {
    this.childCom = event;
  }

  myCount(event) {
    this.countStart = event;
  }
}
