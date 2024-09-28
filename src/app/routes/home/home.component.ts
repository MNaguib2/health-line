import { Component } from '@angular/core';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { PannerSlideComponent } from "./panner-slide/panner-slide.component";
import { AboutClinicComponent } from "./about-clinic/about-clinic.component";

@Component({
  selector: 'health-line-home',
  standalone: true,
  imports: [TopNavComponent, PannerSlideComponent, AboutClinicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
