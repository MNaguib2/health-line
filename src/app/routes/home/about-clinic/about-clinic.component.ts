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
      const element_slides = document.getElementById('medical-services-carousel');
      element_slides ? element_slides.style.transform = `translateX(0px)` : null;
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
    mouse_point: number = 0;
    click_down: boolean = false;
    point_translate: number = 0;
    mouseDownInSlides(event: MouseEvent){
      const element_slides = event.currentTarget as HTMLDivElement;
      element_slides.style.transition = `none`;
      this.mouse_point = event.clientX;
      this.click_down = true;
    }
    mouseUp(event: MouseEvent){
      this.click_down = false;
      const element_slides = event.currentTarget as HTMLDivElement;
      const count_children = element_slides.childElementCount + 1;
      const width_screen = window.screen.width;
      element_slides.style.transition = `all .5s ease-in-out`;
      const style = window.getComputedStyle(element_slides)
      this.point_translate = new DOMMatrixReadOnly(style.transform).m41;
      const width_element_child = (element_slides.firstElementChild?.getBoundingClientRect().width) || 0;
      const count_children_view = Math.ceil(width_screen / width_element_child);
      console.log(count_children_view);
      let define_number_slides = this.point_translate / width_element_child;
      define_number_slides = Math.abs(define_number_slides) >= (count_children - count_children_view) ? (count_children_view - count_children) : define_number_slides
      this.point_translate = define_number_slides >= 1 ? 0 : width_element_child * Math.round(define_number_slides);
      element_slides.style.transform = `translateX(${this.point_translate - 6}px)`
    }
    mouseMove(event: MouseEvent){
      if(this.click_down){
        const point_translate = (event.clientX - this.mouse_point);
        const element_slides = event.currentTarget as HTMLDivElement;
        element_slides.style.transform = `translateX(${this.point_translate + point_translate}px)`
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
