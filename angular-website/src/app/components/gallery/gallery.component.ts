import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CarouselModule, FontAwesomeModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  faBars = faBars;

  products: any | undefined =
    [
      {
        id: '1',
        name: 'Altbee',
        url: '../../../assets/img-carousel.jpg'
      },
      {
        id: '2',
        name: 'Altbee',
        url: '../../../assets/img-carousel.jpg'
      }, {
        id: '3',
        name: 'baden_baden',
        url: '../../../assets/img-carousel.jpg'
      },
      {
        id: '4',
        name: 'abajour_logo',
        url: '../../../assets/img-carousel.jpg'
      }, {
        id: '5',
        name: 'Altbee',
        url: '../../../assets/img-carousel.jpg'
      },
      {
        id: '6',
        name: 'Altbee',
        url: '../../../assets/img-carousel.jpg'
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
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
