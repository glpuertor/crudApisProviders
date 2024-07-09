import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersPageComponent } from './providers.component';

describe('ProvidersPageComponent', () => {
  let component: ProvidersPageComponent;
  let fixture: ComponentFixture<ProvidersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
