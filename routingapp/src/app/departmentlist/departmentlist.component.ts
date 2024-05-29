import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  public selectedId;

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Vue" },
    { "id": 3, "name": "React" },
    { "id": 4, "name": "Spring" },
    { "id": 5, "name": "Ruby" },
    { "id": 6, "name": "Python" }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.selectedId = id
    });
  }


  onSelect(dept){
    this.router.navigate(['/departments',dept.id])
  }

  isSelected(department){
    return department.id === this.selectedId
  }

}
