import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  childMess = "hello from child"
  count = 1;
  @Input() pm;
  @Output() cm = new EventEmitter<string>();
  @Output() counter = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  myChildMess($event){
    this.cm.emit(this.childMess);
  }

  myCount($event){
    this.counter.emit(this.count++)
  }

}
