import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetComponent } from './users-get.component';

describe('ProductGetComponent', () => {
  let component: UsersGetComponent;
  let fixture: ComponentFixture<UsersGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
