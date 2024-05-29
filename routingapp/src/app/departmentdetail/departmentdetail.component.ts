import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'))
      this.departmentId = id
    } );
  }


  goPrev(){
    let prevId = this.departmentId - 1
    // this.departmentId = prevId
    this.router.navigate(['/departments', prevId])
  }

  goNext(){
    let nextId = this.departmentId + 1
    // this.departmentId = nextId
    this.router.navigate(['/departments', nextId])
  }

  goToDepartment(){
    this.router.navigate(['/departments', {id: this.departmentId}])
  }
}
