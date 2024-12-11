import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeemClinicComponent } from './teem-clinic.component';

describe('TeemClinicComponent', () => {
  let component: TeemClinicComponent;
  let fixture: ComponentFixture<TeemClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeemClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeemClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
