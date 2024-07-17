import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.scss'
})
export class Tab2Component {
  faCalendar = faCalendar;
  faClock = faClock;
  
}
