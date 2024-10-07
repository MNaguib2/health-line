import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'health-line-documentation',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent implements OnInit {
  documents: any = [];
  responsiveOptions: any[] | undefined;
  ngOnInit(): void {
    this.defineDocuments();
  }
  defineDocuments(){
    this.documents = [
      {
        "title": "Cardiology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-3.jpg",
        "icon": "assets/icons/cardiology-icon.png"
      },
      {
        "title": "Orthopedic",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-4.jpg",
        "icon": "assets/icons/orthopedic-icon.png"
      },
      {
        "title": "Hematology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-1.jpg",
        "icon": "assets/icons/hematology-icon.png"
      },
      {
        "title": "Cardiology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-3.jpg",
        "icon": "assets/icons/cardiology-icon.png"
      },
      {
        "title": "Orthopedic",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-4.jpg",
        "icon": "assets/icons/orthopedic-icon.png"
      },
      {
        "title": "Hematology",
        "description": "Nemo ipsam voluptatem quia voluptas sit enim spernatura ut odit ddsa ursa.",
        "image": "assets/img/blog/specialist1-1.jpg",
        "icon": "assets/icons/hematology-icon.png"
      }
    ]
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
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
