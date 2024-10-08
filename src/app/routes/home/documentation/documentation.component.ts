import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { fadeInUp } from '@core/services/animation-share.service';

@Component({
  selector: 'health-line-documentation',
  standalone: true,
  imports: [CarouselModule],
  animations: [
    trigger('fadeInUpTrigger', [
      transition('* => in', [
        useAnimation(fadeInUp, {
          params: {
            translateY: 20, // Start from 20px
            duration: '0.4s', // Animation duration
            easing: 'ease-in', // Easing function
            delay: '{{ delay }}', // Delay will be passed dynamically
          },
        })
      ])
    ])
  ],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent implements OnInit {
  documents: any = [];
  responsiveOptions: any[] | undefined;

  scroll_controller = new AbortController();
  ngOnInit(): void {
    this.defineDocuments();
    window.addEventListener('scroll', () => this.onWindowScroll(), { signal: this.scroll_controller.signal });
  }
  scroll_document_slides!: string;
  onWindowScroll() {
    const element_carousel_documents = document.querySelector('#documents-slides');
    const position_carousel_documents = element_carousel_documents?.getBoundingClientRect();

    if (position_carousel_documents && position_carousel_documents.top <= window.innerHeight && position_carousel_documents.bottom >= 0) {
      this.scroll_document_slides = 'in'; // Element is in view
      // Remove the listener after it executes
      this.scroll_controller.abort();
    }
  }
  defineDocuments(){
    this.documents = [
      {
        "title": "Cardiology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-1.jpg",
        "icon": "/assets/image/documentation/icon-slides.svg",
        order: 1
      },
      {
        "title": "Orthopedic",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-2.jpg",
        "icon": "/assets/image/documentation/icon-slides-2.svg",
        order: 2
      },
      {
        "title": "Hematology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-3.jpg",
        "icon": "/assets/image/documentation/icon-slides-3.svg",
        order: 3
      },
      {
        "title": "Cardiology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-1.jpg",
        "icon": "/assets/image/documentation/icon-slides.svg",
        order: 4
      },
      {
        "title": "Orthopedic",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-2.jpg",
        "icon": "/assets/image/documentation/icon-slides-2.svg",
        order: 5
      },
      {
        "title": "Hematology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "/assets/image/documentation/slides-3.jpg",
        "icon": "/assets/image/documentation/icon-slides-3.svg",
        order: 6
      },
    ]
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
    ]
  }
}
