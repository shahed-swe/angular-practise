import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cinteract',
  templateUrl: './cinteract.component.html',
  styleUrls: ['./cinteract.component.css']
})
export class CinteractComponent implements OnInit {

  
  @Input('parentData') public name;
  // @Input() public parentData;


  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hey ParentOne")
  }

  constructor() { }

  ngOnInit() {
  }

}
