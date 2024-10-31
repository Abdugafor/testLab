import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Navigation, Pagination])

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    // CarouselModule, 
    CommonModule,
    SwiperModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  
})
export class SliderComponent {
  cards = [
    {
      name: 'Константинов Михаил Павлович',
      location: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь...',
      image: ''
    },
    {
      name: 'Иван Иванов',
      location: 'Санкт-Петербург',
      text: 'Каждый из нас понимает очевидную вещь...',
      image: ''
    },
    {
      name: 'Артем Корнилов',
      location: 'Самара',
      text: 'Каждый из нас понимает очевидную вещь...',
      image: ''
    }
    ,
    {
      name: 'Артем Корнилов',
      location: 'Самара',
      text: 'Каждый из нас понимает очевидную вещь...',
      image: '' 
    }
  ];

  customOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      1000: { slidesPerView: 3 },
    }
  };
  
  
}
