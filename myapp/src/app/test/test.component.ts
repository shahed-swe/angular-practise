import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title="Test Page"
  public greeting = ""

  onClick(event){
    this.title = "Page 2"
    console.log(event)
  }

  logMessage(value){
    console.log(value.value)
  }
}
