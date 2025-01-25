import { Component } from '@angular/core';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.css'],
})
export class WebProjectsComponent {
  projects = [
    {
      title: 'Proyecto Cine',
      description:
        'Una página web para un cine, creada usando HTML, CSS y JavaScript.',
      img: './assets/dam-cinema.JPG',
      link: 'https://richardchadp5555.github.io/cine/',
    },
    {
      title: 'gifs-search app',
      description:
        'Esta aplicación permite buscar y ver gifs, desarrollado en Angular.',
      img: './assets/gifs-app.JPG',
      link: 'https://richardchadp5555.github.io/gif-search-app/',
    },
  ];
}
