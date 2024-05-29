import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test2',
  template: `
  <h1>Welcome {{name}}</h1>
  <h1>{{2+2}}</h1>
  <h2>{{"Welcome " + name + " On board"}}</h2>
  <h1>{{name.length}}</h1>
  <h1>{{name.toUpperCase()}}</h1>
  <h1>{{greetUser()}}</h1>
  <input type="text" value="Shahed"/><br/>
  <input type="text" [id]="myId" value="Shahed"/><br/>
  <input disabled="false" type="text" id={{myId}} value="Shahed"/><br/>
  <input [disabled]="isDisabled" type="text" id={{myId}} value="Shahed"/><br/>
  `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  public name = "Shahed";
  public myId = "testId";
  public isDisabled = true
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}


// can not assign variable inside template
// can't access global javascript variables like window, document etc directly onto template

// Attributes and Properties are not same
// Attribute defined by html
// Properties defined by DOM
// Attribute initialize dom properties and then they are done. Attribute values cannot chanage once they are initialized
// Property values however can change
