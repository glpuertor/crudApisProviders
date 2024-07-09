import { ComponentFixture, TestBed } from '@angular/core/testing';

import { teamsComponent } from './teams.component';

describe('teamsComponent', () => {
  let component: teamsComponent;
  let fixture: ComponentFixture<teamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ teamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(teamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
