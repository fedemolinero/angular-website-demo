import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  faChevronDown = faChevronDown;
  faStar = faStar;

  constructor(
  ) { }

}
