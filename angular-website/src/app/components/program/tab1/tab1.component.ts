import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.scss'
})
export class Tab1Component {
  faCalendar = faCalendar;
  faClock = faClock;
  
}
