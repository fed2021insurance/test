import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentCom = "parent data"
  childCom = ''
  countStart = 0;

  myChildMess(event){
    this.childCom = event

  }

  myCount(event){
    this.countStart = event
  }

}
