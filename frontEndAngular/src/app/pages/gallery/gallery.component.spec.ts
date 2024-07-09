import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galleryComponent } from './gallery.component';

describe('galleryComponent', () => {
  let component: galleryComponent;
  let fixture: ComponentFixture<galleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ galleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(galleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
