import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [RouterLink, HeaderComponent,  RouterOutlet, FooterComponent, MainComponent],
  templateUrl: './root-page.component.html',
  styleUrl: './root-page.component.css'
})
export class RootPageComponent {

}
