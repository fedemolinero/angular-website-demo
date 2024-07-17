import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faCheck, faClock, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IncludesComponent } from './includes/includes.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    IncludesComponent,
    Tab1Component, Tab2Component, Tab3Component
  ],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
  faStar = faStar;
  faClock = faClock;
  faCalendar = faCalendar;
  faIconCheck = faCheck;

  activeItem: string = 'basic';

  setActive(item: string) {
    this.activeItem = item;
  }

  selectedTab: number = 1;

  coffeeTopics: string[] = [
    'Legend of the origin of coffee.',
    'Chronicle of the spread of the coffee tree',
    'What is coffee?',
    'The structure of the coffee berry',
    'Arabica and Robusta',
    'Coffee Belt land',
    'Fruiting coffee tree',
    'Seven steps of the coffee plantation to the consumer',
    'Breeding and hybridization of coffee tree'
  ];

  coffeeProductionTopics: string[] = [
    'Methods for collecting coffee berries',
    'Processing collected berries',
    'Calibration and sorting',
    'Some methods of classification and labeling of coffee beans.',
    'Formation of grade names.',
    'Storage of green (not fried) Coffee'
  ];

  roastingTopics: string[] = [
    'The technology of roasting coffee beans.',
    'Changes in the beans',
    'Stages and types of roasting',
    'Roasted coffee. Monosorta and hood.',
    'Decaffeination of coffee.',
    'Flavoring',
    'Storage roasted coffee'
  ];

  selectTab(tab: number) {
    this.selectedTab = tab;
  }

}
