import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Tech Tutorials</h2>
    <h2 [class]="successClass">This is new tech</h2>
    <h2 class="text-special" [class]="successClass">Final Tile</h2>
    <h2 [class.text-danger]="hasError">{{name}}</h2>
    <h2 [ngClass]="messageClasses">{{name}}</h2>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class Test4Component implements OnInit {
  public name = "Shahed"
  public successClass = "text-success"
  public hasError = false
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
