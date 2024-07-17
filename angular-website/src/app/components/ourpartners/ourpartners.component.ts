import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-ourpartners',
  standalone: true,
  imports: [CarouselModule, FontAwesomeModule],
  templateUrl: './ourpartners.component.html',
  styleUrl: './ourpartners.component.scss'
})

export class OurpartnersComponent {
  products: any | undefined =
    [
      {
        id: '1',
        name: 'Altbee',
        url: '../../../assets/logos/altbee_logo.png'
      },
      {
        id: '2',
        name: 'Altbee',
        url: '../../../assets/logos/logo_klass.png'
      }, {
        id: '3',
        name: 'baden_baden',
        url: '../../../assets/logos/logo_baden_baden.png'
      },
      {
        id: '4',
        name: 'abajour_logo',
        url: '../../../assets/logos/abajour_logo.png'
      }, {
        id: '5',
        name: 'Altbee',
        url: '../../../assets/logos/gdeburger_logo.png'
      },
      {
        id: '6',
        name: 'Altbee',
        url: '../../../assets/logos/dedushka_logo.png'
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

  faBars = faBars;

  constructor() { }


}