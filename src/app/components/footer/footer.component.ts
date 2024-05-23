import { Component } from '@angular/core';
import { Service } from '../../services/service.service';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer: any;
  image: any;
  imageTwo: any;
  categories: any;
  sectionOne: any;

  constructor(
    private service: Service,
  
  ) {   
    this.service.getWeb().subscribe(
      (data: any) => {
        this.footer = data;
        this.sectionOne = data.secciones[0];
        this.image = data.secciones[0].imagen;
        this.imageTwo = data.secciones[0].imagen2;
        this.categories = data.secciones[0].categorias;
      }
    );
  
  }
  
}
