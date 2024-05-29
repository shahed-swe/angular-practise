import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test3]',
  templateUrl: './test3.component.html',
  styles: [`
    div{
      color: red;
    }
  `]
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
