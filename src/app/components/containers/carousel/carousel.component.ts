import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../../services/service.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() data: any;
  articles: any;
  carouselData = [
    { 
      imgSrc: "./assets/home/cards/tulum.png",
      name: "Blanche Pearson",
      role: "Sales Manager"
    },
    { 
      imgSrc: "images/img-2.jpg",
      name: "Joenas Brauers",
      role: "Web Developer"
    },
    { 
      imgSrc: "./assets/home/cards/tulum.png",
      name: "Blanche Pearson",
      role: "Sales Manager"
    },
    { 
      imgSrc: "images/img-2.jpg",
      name: "Joenas Brauers",
      role: "Web Developer"
    },
    { 
      imgSrc: "./assets/home/cards/tulum.png",
      name: "Blanche Pearson",
      role: "Sales Manager"
    },
    { 
      imgSrc: "images/img-2.jpg",
      name: "Joenas Brauers",
      role: "Web Developer"
    },
    { 
      imgSrc: "images/img-2.jpg",
      name: "Joenas Brauers",
      role: "Web Developer"
    },
    // Añade más datos según sea necesario
  ];

  dataa: any = {id: 0,     
    activos: true,
    nombre: '',
    codigo: '',
    familia: 1,
    proveedor: 0,
    materia_prima: 0,
    get_web: true,
    get_sucursales: false,
    get_proveedores: false,
    get_max_mins: false,
    get_plantilla_data: false,
    id_usuario: 3
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private service: Service
  ) { 

    this.service.getFamilies(this.dataa).subscribe(
      (data: any) => {
        this.articles = data





      }
    )



  }

  ngAfterViewInit() {
    this.setupCarousel();
  }

  setupCarousel() {
    const wrapper = this.elementRef.nativeElement.querySelector(".wrapper");
    const carousel = this.elementRef.nativeElement.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = this.elementRef.nativeElement.querySelectorAll(".wrapper .i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX: any, startScrollLeft: any, timeoutId: any;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach((btn: any) => {
        this.renderer.listen(btn, "click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e: any) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e: any) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
    }

    autoPlay();

    this.renderer.listen(carousel, "mousedown", dragStart);
    this.renderer.listen(carousel, "mousemove", dragging);
    this.renderer.listen(document, "mouseup", dragStop);
    this.renderer.listen(carousel, "scroll", infiniteScroll);
    this.renderer.listen(wrapper, "mouseenter", () => clearTimeout(timeoutId));
    this.renderer.listen(wrapper, "mouseleave", autoPlay);
  }
}

