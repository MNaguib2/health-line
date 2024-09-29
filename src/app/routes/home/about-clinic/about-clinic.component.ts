import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

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
export class AboutClinicComponent implements OnInit {
    is_visible_paragraph_experience: string = 'out';
    is_visible_picture_experience: string = 'out';

    ngOnInit(): void {
      this.onWindowScroll();
    }
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
      this.controlWidthCarousel();
    }
    controlWidthCarousel(){
      const width = window.innerWidth;
      const collection_element = document.querySelectorAll('.services-carousel-card');
      if(width < 900){
        collection_element.forEach((element: any) => {
          element.style.width = `${width}px`;
        });
      }else if(width < 1500){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 2}px`;
        });
      }else if(width < 2000){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 3}px`;
        });
      }
    }
    carousel = [
      {
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      },
      {
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      },
      {
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      },
      {
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      }
  ]

}
