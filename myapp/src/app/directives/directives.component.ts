import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public displayName = false

  public color = "red"

  public title = "Shahed"
  constructor() { }

  ngOnInit() {
  }

  public colors = ['red','blue','green','orange']

}
