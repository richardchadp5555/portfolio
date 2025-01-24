import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
})
export class ContactInformationComponent {
  name = 'Richard';
  surname = 'Chadwick Plaza';
  age = '24';
  email = 'richardchadp@gmail.com';
  phone = '6588680978';
  linkedin = 'https://www.linkedin.com/in/richard-chadwick-plaza-a17b4a203/';
  github = 'https://github.com/richardchadp5555';
}
