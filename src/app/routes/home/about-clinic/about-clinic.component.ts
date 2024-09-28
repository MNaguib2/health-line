import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

const fadeInUp = animation([

  animate(
    '{{ duration }} {{ delay }}s {{ easing }}',
    style({ transform: 'translateY(0px)', opacity: 1 })
  ),

]);

@Component({
  selector: 'health-line-about-clinic',
  standalone: true,
  imports: [],
  templateUrl: './about-clinic.component.html',
  styleUrl: './about-clinic.component.scss',
  animations: [
    trigger('fadeInUpTrigger', [
      state(
        'out',
        style({ transform: 'translateY(20px)', opacity: 0 }),
      ),
      state(
        'in',style({ transform: 'translateY(0px)', opacity: 1 })
      ),
      transition('out => in', [animate('0.4s {{ delay }}s ease-in')])

        // useAnimation(fadeInUp, {
        //   params: {
        //     translateY: 20, // Start from 20px
        //     duration: '0.4s', // Animation duration
        //     easing: 'ease-in', // Easing function
        //     delay: '{{ delay }}', // Delay will be passed dynamically
        //   },
        // }),
      //]),
    ]),
  ]
})
export class AboutClinicComponent {
    is_visible_paragraph_experience: string = 'out';
    is_visible_picture_experience: string = 'out';
    // Listener for scroll events
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      const element_paragraph = document.querySelector('#paragraph-section-experience');
      const element_picture = document.querySelector('#picture-section-experience');
      const position_paragraph = element_paragraph?.getBoundingClientRect();
      const position_picture = element_picture?.getBoundingClientRect();

      if (position_paragraph && position_paragraph.top <= window.innerHeight && position_paragraph.bottom >= 0) {
        this.is_visible_paragraph_experience = 'in'; // Element is in view
      } else {
        this.is_visible_paragraph_experience = 'out'; // Element is out of view
      }
      if (position_picture && position_picture.top <= window.innerHeight && position_picture.bottom >= 0) {
        this.is_visible_picture_experience = 'in'; // Element is in view
      } else {
        this.is_visible_picture_experience = 'out'; // Element is out of view
      }
    }
}
