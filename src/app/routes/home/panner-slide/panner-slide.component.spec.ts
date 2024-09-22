import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannerSlideComponent } from './panner-slide.component';

describe('PannerSlideComponent', () => {
  let component: PannerSlideComponent;
  let fixture: ComponentFixture<PannerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PannerSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
