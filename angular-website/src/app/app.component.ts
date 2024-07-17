import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProgramComponent } from './components/program/program.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InfoComponent } from './components/info/info.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OurpartnersComponent } from './components/ourpartners/ourpartners.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    // COMPONENTS
    MenuComponent,
    HeaderComponent,
    BannerComponent,
    ProgramComponent,
    QuestionsComponent,
    GalleryComponent,
    InfoComponent,
    TestimonialsComponent,
    OurpartnersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'websiteApp';
}
