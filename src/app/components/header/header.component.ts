import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Service } from '../../services/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  web: any;
  sections: any;
  container: any;
  menuVisible: boolean = false;
  id: any;

  

  constructor(
    private service:  Service,
  @Inject(PLATFORM_ID) private platformId: Object
  ) {

    this.service.getWeb().subscribe(
      (data: any) => {
        this.web = data
        if (isPlatformBrowser(this.platformId)) {
          document.documentElement.style.setProperty('--color-primary', this.web.color_primario);
          document.documentElement.style.setProperty('--color-text-f-h', this.web.color_secundario);
        }
     
      }
    )
    
    this.service.getWebSecciones().subscribe(
      (data: any) => {
        this.sections = data
      }
    )

    this.service.getContainers(2).subscribe(
      (data: any) => {
        this.container = data
        service.containers = data
        console.log(this.container)
      }
    );
    console.log(this.container)

  }

  toggleMenu(): void {
    const button = document.querySelector('.toggle__botton');
    const navLinks = document.querySelector('.nav__links') as HTMLElement;
    if (button && navLinks) { // Verifica si ambos elementos existen
      button.classList.toggle('activo');
      this.menuVisible = !this.menuVisible; // Alternar el estado del menú
      navLinks.classList.toggle('active', this.menuVisible);

    } 
  }



  public characters = [
    { name: 'Logo', image: 'https://materialesgraficosdelcaribe.com/images/mg%20materiales%20graficos-n-05-crop-u147.png?crc=3826773751'},
  ];
}
