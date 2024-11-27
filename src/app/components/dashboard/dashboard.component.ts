import { Component, OnInit, OnDestroy, Renderer2, ElementRef  } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit, OnDestroy {

  private backgroundImages: string[] = [
    '/assets/img/fondo_1.jpg',
    '/assets/img/fondo_2.jpg',
    '/assets/img/fondo_3.jpg',
    '/assets/img/fondo_4.jpg',
    '/assets/img/fondo_5.jpg',
    '/assets/img/fondo_6.jpg'
  ];
  private currentImageIndex: number = 0;
  private intervalId: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.changeBackgroundImage();
    this.intervalId = setInterval(() => {
      this.changeBackgroundWithFade();
    }, 5000); // Cambia cada 5 segundos (5000ms)
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private changeBackgroundImage(): void {
    const nextImage = this.backgroundImages[this.currentImageIndex];
    this.renderer.setStyle(document.body, 'background-image', `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nextImage})`);
    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
  }

  private changeBackgroundWithFade(): void {
    const nextImage = this.backgroundImages[this.currentImageIndex];
    // Aplica la clase de fade-out
    this.renderer.addClass(document.body, 'fade-background');

    setTimeout(() => {
      // Cambia la imagen cuando esté completamente opaca
      this.renderer.setStyle(document.body, 'background-image', `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nextImage})`);

      // Elimina la clase de fade-out y agrega la clase de fade-in
      this.renderer.removeClass(document.body, 'fade-background');
      this.renderer.addClass(document.body, 'fade-background-active');

      // Después de que termine la animación de fade-in, elimina la clase
      setTimeout(() => {
        this.renderer.removeClass(document.body, 'fade-background-active');
      }, 4000); // El mismo tiempo que la transición CSS
    }, 4000); // Tiempo para que termine la animación de fade-out

    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
  }
  
}

/*
karitaJC1690_jc$
karitaJC1690_jc
karitaJC1690_jc&
karitajc1690_jc       *

*/