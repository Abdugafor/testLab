import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { FaqsComponent } from "./components/faqs/faqs.component";
import { MockTextComponent } from "./components/mock-text/mock-text.component";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InfoCardComponent,
    BannerComponent,
    ReviewCardComponent,
    SliderComponent,
    FaqsComponent,
    MockTextComponent,
    FormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
