import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamClinicComponent } from './team-clinic.component';

describe('TeemClinicComponent', () => {
  let component: TeamClinicComponent;
  let fixture: ComponentFixture<TeamClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
