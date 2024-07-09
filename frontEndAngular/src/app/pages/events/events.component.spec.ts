import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventsComponent } from './events.component';

describe('eventsComponent', () => {
  let component: eventsComponent;
  let fixture: ComponentFixture<eventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(eventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
