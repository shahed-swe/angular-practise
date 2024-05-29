import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "Shahed";
  public message = "Hey there I am not the one you are looking for"
  public person = {
    "firstName":"Shahed",
    "lastname":"Talukder"
  }

  public date = new Date()
  constructor() { }

  ngOnInit() {
  }

}
