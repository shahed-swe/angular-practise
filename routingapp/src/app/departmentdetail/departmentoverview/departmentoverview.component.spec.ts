import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentoverviewComponent } from './departmentoverview.component';

describe('DepartmentoverviewComponent', () => {
  let component: DepartmentoverviewComponent;
  let fixture: ComponentFixture<DepartmentoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
