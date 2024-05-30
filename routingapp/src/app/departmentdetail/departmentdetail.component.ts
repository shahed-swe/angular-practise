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
    // this.router.navigate(['/departments', prevId])
    this.router.navigate(['../',prevId], { relativeTo: this.route })
  }

  goNext(){
    let nextId = this.departmentId + 1
    // this.departmentId = nextId
    // this.router.navigate(['/departments', nextId])
    this.router.navigate(['../',nextId], { relativeTo: this.route })
  }

  goToDepartment(){
    // this.router.navigate(['/departments', {id: this.departmentId}])
    this.router.navigate(['../', {id: this.departmentId}], { relativeTo: this.route })
  }

  departmentOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  departmentContact(){
    this.router.navigate(['contact'], { relativeTo: this.route })
  }
}
