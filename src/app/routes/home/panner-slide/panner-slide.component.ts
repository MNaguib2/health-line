import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';

const fadeInRight = animation([
  style({ transform: 'translateX({{ translateX }}px)', opacity: 0 }),
  animate(
    '{{ duration }} {{ delay }}s {{ easing }}',
    style({ transform: 'translateX(0px)', opacity: 1 })
  ),
]);
const fadeInUp = animation([
  style({ transform: 'translateY({{ translateY }}px)', opacity: 0 }),
  animate(
    '{{ duration }} {{ delay }}s {{ easing }}',
    style({ transform: 'translateY(0px)', opacity: 1 })
  ),
]);
@Component({
  selector: 'health-line-panner-slide',
  standalone: true,
  imports: [],
  templateUrl: './panner-slide.component.html',
  styleUrl: './panner-slide.component.scss',
  animations: [
    trigger('fadeInRightTrigger', [
      transition(':enter', [
        useAnimation(fadeInRight, {
          params: {
            translateX: 20, // Start from 20px
            duration: '0.4s', // Animation duration
            easing: 'ease-in', // Easing function
            delay: '{{ delay }}', // Delay will be passed dynamically
          },
        }),
      ]),
    ]),
    trigger('fadeInUpTrigger', [
      transition(':enter', [
        useAnimation(fadeInUp, {
          params: {
            translateY: 20, // Start from 20px
            duration: '0.4s', // Animation duration
            easing: 'ease-in', // Easing function
            delay: '{{ delay }}', // Delay will be passed dynamically
          },
        }),
      ]),
    ]),
  ],
})
export class PannerSlideComponent {
  isScreenSmall: boolean = true;

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  // Method to check if screen width is smaller than 1200px
  checkScreenSize(): void {
    this.isScreenSmall = window.innerWidth > 1199;
  }
}
