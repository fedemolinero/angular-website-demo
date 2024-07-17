import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  products: any | undefined =
    [
      {
        id: '1',
        name: 'Alex Nikandrov',
        info: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
        url: '../../../assets/profile.png'
      },
      {
        id: '2',
        name: 'Fede Molinero',
        info: "Recommended!",
        url: '../../../assets/profile.png'
      },
      {
        id: '3',
        name: 'Alex Nikandrov',
        info: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
        url: '../../../assets/profile.png'
      }

    ]

  responsiveOptions: any[] | undefined = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
