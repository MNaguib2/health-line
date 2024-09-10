import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    // if(isPlatformBrowser(this.platformId))
    //   // localStorage.setItem('app', 'test');
    //     this.http.get('https://fakestoreapi.com/products')
    //     .subscribe((data: any) => console.log('111111111111111111111111', data));
    //     if(isPlatformBrowser(this.platformId))
    //     fetch('https://fakestoreapi.com/products')
    //             .then(res=>res.json())
    //             .then(json=>console.log('22222222222222222222222222',json))
  }
  ngOnInit(): void {
  }
  title = 'health-line';
}
