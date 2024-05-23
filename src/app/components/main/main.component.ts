import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../containers/banner/banner.component';
import { CarouselComponent } from '../containers/carousel/carousel.component';
import { SliderComponent } from '../containers/slider/slider.component';
import { ServicesComponent } from '../containers/services/services.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, BannerComponent, CarouselComponent, SliderComponent, ServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(public service: Service) {

  }

  
}
