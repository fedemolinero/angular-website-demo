import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-includes',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './includes.component.html',
  styleUrl: './includes.component.scss'
})
export class IncludesComponent {
  faCheck = faCheck;
  faTimes = faTimes;

  items = [
    { text: 'Coffee machine and grinder - practice - types of coffee machines and coffee grinders', icon: this.faCheck },
    { text: 'What makes professional coffee machines and coffee grinders.', icon: this.faCheck },
    { text: 'Main components of coffee machines and coffee-Lathes, autolathes.', icon: this.faTimes },
    { text: 'How to choose a coffee machine and coffee grinder', icon: this.faTimes },
    { text: 'The structure of the machine. How to maintain, clean and customize coffee machine', icon: this.faTimes },
    { text: 'The structure of the grinders. How to maintain, clean and customize coffee Molko', icon: this.faTimes },
    { text: 'Making beverages - praktika- machines and espresso rules', icon: this.faCheck },
    { text: 'Technology and regulations frothed milk', icon: this.faTimes },
    { text: 'Terms of tasting coffee', icon: this.faTimes },
    { text: 'Terms of preparation of standard drinks line: espresso, cappuccino, latte and others.', icon: this.faTimes },
    { text: 'Latte Art - Features practice and the importance of Latte Art in business and the barista', icon: this.faTimes },
    { text: '1 views Latte Art - Pitching', icon: this.faTimes },
    { text: '2 views Latte Art - topping', icon: this.faTimes },
    { text: '3 views Latte Art - Etching', icon: this.faTimes },
    { text: '4 views Latte Art - chocolate chip stencils', icon: this.faTimes },
    { text: '5 views Latte Art - Espresso with milk', icon: this.faTimes },
    { text: '6 views Latte Art - Mixed', icon: this.faTimes }
  ];

}
