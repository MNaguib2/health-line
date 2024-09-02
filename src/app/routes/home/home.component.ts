import { Component } from '@angular/core';
import { TopNavComponent } from "./top-nav/top-nav.component";

@Component({
  selector: 'health-line-home',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
