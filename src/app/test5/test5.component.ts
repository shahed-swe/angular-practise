import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="bindingColor">Style Binding</h2>
    <h2 [ngStyle]="titleStyle">This is my title</h2>
  `,
  styles: [`
    
  `]
})
export class Test5Component implements OnInit {
  public name = "Shahed"
  public hasError = false
  public bindingColor = this.hasError ? "red":"orange"
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  };
  constructor() { }

  ngOnInit() {
  }

}
