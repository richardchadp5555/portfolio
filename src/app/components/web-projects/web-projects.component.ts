import { Component } from '@angular/core';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.css'],
})
export class WebProjectsComponent {
  projects = [
    {
      title: 'Cinema web project',
      description:
        'website for a fictional cinema, created using HTML, CSS and JavaScript.',
      img: './assets/dam-cinema.JPG',
      link: 'https://richardchadp5555.github.io/cine/',
    },
    {
      title: 'gifs-search app',
      description:
        'This app allows you to search and view gifs, developed in Angular',
      img: './assets/gifs-app.JPG',
      link: 'https://richardchadp5555.github.io/gif-search-app/',
    },
  ];
}
