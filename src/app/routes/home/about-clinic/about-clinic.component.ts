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
    is_visible_title_slides: string = 'out';
    is_visible_carousel: string = 'out';

    ngOnInit(): void {
      this.onWindowScroll();
    }
    // Listener for scroll events
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      const element_paragraph = document.querySelector('#paragraph-section-experience');
      const element_picture = document.querySelector('#picture-section-experience');

      const element_title_slides = document.querySelector('#title-carousel');
      const element_carousel = document.querySelector('#medical-services-carousel');

      const position_paragraph = element_paragraph?.getBoundingClientRect();
      const position_picture = element_picture?.getBoundingClientRect();

      const position_title_slides = element_title_slides?.getBoundingClientRect();
      const position_carousel = element_carousel?.getBoundingClientRect();

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
      if (position_title_slides && position_title_slides.top <= window.innerHeight && position_title_slides.bottom >= 0) {
        this.is_visible_title_slides = 'in'; // Element is in view
      } else {
        this.is_visible_title_slides = 'out'; // Element is out of view
      }
      if (position_carousel && position_carousel.top <= window.innerHeight && position_carousel.bottom >= 0) {
        this.is_visible_carousel = 'in'; // Element is in view
      } else {
        this.is_visible_carousel = 'out'; // Element is out of view
      }
      this.controlWidthCarousel();
      this.controlWidthCarouselBrands();
    }
    controlWidthCarousel(){
      const width = window.innerWidth;
      const collection_element = document.querySelectorAll('.services-carousel-card');
      const element_slides = document.getElementById('medical-services-carousel');
      element_slides ? element_slides.style.transform = `translateX(0px)` : null;
      if(width < 768){
        collection_element.forEach((element: any) => {
          const image_resize = element.querySelector(':scope > div > div > img:first-child') as HTMLImageElement;
          const id = +image_resize.id;
          if(id) {
            const carousel_element = this.carousel_service.find(ele => +ele.id === id);
            if(carousel_element && carousel_element.position && carousel_element.position.none){
              image_resize.style.top = `${carousel_element.position.none.top}`;
              image_resize.style.left = `${carousel_element.position.none.left}`;
            }else{
              image_resize.style.top = `0px`;
              image_resize.style.left = `0px`;
            }
          }
          element.style.width = `${width}px`;
        });
      }else if(width < 900){
        collection_element.forEach((element: any) => {
          const image_resize = element.querySelector(':scope > div > div > img:first-child') as HTMLImageElement;
          const id = +image_resize.id;
          if(id) {
            const carousel_element = this.carousel_service.find(ele => +ele.id === id);
            if(carousel_element && carousel_element.position && carousel_element.position.medium){
              image_resize.style.top = `${carousel_element.position.medium.top}`;
              image_resize.style.left = `${carousel_element.position.medium.left}`;
            }else{
              image_resize.style.top = `0px`;
              image_resize.style.left = `0px`;
            }
          }
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
    controlWidthCarouselBrands(){
      const width = window.innerWidth;
      const collection_element = document.querySelectorAll('.card-brands');
      const element_slides = document.getElementById('medical-brands-carousel');
      element_slides ? element_slides.style.transform = `translateX(0px)` : null;

      if(width < 575){
        collection_element.forEach((element: any) => {
          element.style.width = `${width}px`;
        });
      }else if(width < 768){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 2}px`;
        });
      }else if(width < 900){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 3}px`;
        });
      }else if(width < 1200){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 4}px`;
        });
      }else if(width > 1200){
        collection_element.forEach((element: any) => {
          element.style.width = `${(width) / 5}px`;
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
    carousel_brands = [
      {index: 0, image_url:'assets/image/section-clinic/brands-carousel-1.png'},
      {index: 1, image_url:'assets/image/section-clinic/brands-carousel-2.png'},
      {index: 2, image_url:'assets/image/section-clinic/brands-carousel-3.png'},
      {index: 3, image_url:'assets/image/section-clinic/brands-carousel-4.png'},
      {index: 4, image_url:'assets/image/section-clinic/brands-carousel-5.png'},
      {index: 5, image_url:'assets/image/section-clinic/brands-carousel-1.png'},
      {index: 6, image_url:'assets/image/section-clinic/brands-carousel-2.png'},
      {index: 7, image_url:'assets/image/section-clinic/brands-carousel-3.png'},
      {index: 8, image_url:'assets/image/section-clinic/brands-carousel-4.png'},
      {index: 9, image_url:'assets/image/section-clinic/brands-carousel-5.png'},
      {index: 10, image_url:'assets/image/section-clinic/brands-carousel-1.png'},
      {index: 11, image_url:'assets/image/section-clinic/brands-carousel-2.png'},
      {index: 12, image_url:'assets/image/section-clinic/brands-carousel-3.png'},
      {index: 13, image_url:'assets/image/section-clinic/brands-carousel-4.png'},
      {index: 14, image_url:'assets/image/section-clinic/brands-carousel-5.png'},
    ]
    carousel_service = [
      {
          "id":"1",
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg", position: {none: {top: '-122px', left: '0px'}, medium: {top: '0px', left: '0px'}}
      },
      {
        "id":"2",
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg", position: {none: {top: '-122px', left: '0px'}, medium:{top: '0px', left: '0px'}}
      },
      {
        "id":"3",
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg", position: {none: {top: '0px', left: '0px'}}
      },
      {
        "id":"4",
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg", position: {none: {top: '-122px', left: '0px'}}
      },
      {
        "id":"5",
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg", position: {none: {top: '-122px', left: '0px'}}
      },
      {
        "id":"6",
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg", position: {none: {top: '-122px', left: '0px'}}
      },
      {"id":"7",
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
          "id":"8",
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
          "id":"9",
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      },
      {
          "id":"10",
          "title": "Cardiovascular for Woman’s clear now",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-1.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-1.svg"
      },
      {
        "id":"11",
          "title": "Hematology and Super Cool work",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-2.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-2.svg"
      },
      {
        "id":"12",
          "title": "Family Physician and Doctor",
          "category": "Physiology",
          "image_url": "assets/image/section-clinic/service-carousel-3.jpg",
          "icon_url": "assets/image/section-clinic/service-carousel-3.svg"
      }
  ]

}
