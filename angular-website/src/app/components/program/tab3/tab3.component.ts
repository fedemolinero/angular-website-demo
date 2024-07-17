import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tab3.component.html',
  styleUrl: './tab3.component.scss'
})
export class Tab3Component {
  faCalendar = faCalendar;
  faClock = faClock;
  
}
