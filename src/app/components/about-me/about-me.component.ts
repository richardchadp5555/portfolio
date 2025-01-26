import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  summary: string =
    "I'm Richard Chadwick Plaza, a software development student with a knack for front-end development and creating visually appealing interfaces. ";
  skills: string[] = [
    'Java: Object-Oriented Programming (OOP), MySQL integration with JDBC, basic concurrency concepts (semaphores, deadlocks), and foundational knowledge of Hibernate. Currently exploring MongoDB integration.',
    'Python: Proficient in OOP, SQLite integration, and currently learning Django for building full-stack applications with backend, frontend, and database integration.',
    'SQL: Advanced queries, relational database design, stored procedures, functions, triggers, and optimizing database operations.',
    'Frontend: Basic proficiency in HTML, CSS, Bootstrap, TypeScript, and Angular. Passionate about frontend development and improving my skills in this area. Recently learned to integrate HTTP requests in Angular to fetch data from APIs (e.g., GIPHY).',
    'Linux: Comfortable with Linux command-line tools, used extensively in projects involving virtual machines. Set up and managed a Dolibarr installation with a custom database on Oracle Cloud Infrastructure, accessed via SSH.',
    'Tools: Proficient with Git, MySQL Workbench, Office tools, and Google applications.',
    'Frameworks: Currently learning Spring Boot and eager to dive deeper into its capabilities for backend development.',
    'Soft Skills: Curious, adaptable, and proactive in learning new technologies. Passionate about combining creativity and logic to build efficient solutions.',
  ];
  hobbies: string[] = [
    'Sports: I love staying active with gym sessions, hiking, airsoft, padel, volleyball, and skiing. I enjoy both team sports like padel and volleyball as well as solitary activities like Muay Thai, boxing, and archery. I believe sports are essential for managing stress, boosting productivity, and improving well-being.',
    'Reading: Avid reader of diverse genres, including fantasy (*Eragon Saga* by Christopher Paolini, *The Hobbit*), mystery (*Agatha Christie*), and science books (*The Universe in a Nutshell* by Stephen Hawking, *Astrophysics for People in a Hurry* by Neil deGrasse Tyson). Currently enjoying *Mistborn* by Brandon Sanderson.',
    'Movies: Big fan of filmmakers like Quentin Tarantino, Wes Anderson, Steven Spielberg, and Christopher Nolan. I love storytelling in all its forms, and movies are one of my favorite ways to experience it.',
    'Music: Music is an essential part of my life. I enjoy classical composers like Rachmaninoff and Schubert, rock bands like Dire Straits and Radiohead, and versatile artists like The Smiths and Linkin Park. My playlist spans across genres and moods.',
    'Video Games: I enjoy both competitive and single-player games. Favorites include *League of Legends*, *Age of Empires*, *Skyrim*, and *Ghost of Tsushima*—both art pieces, in my opinion.',
    'Drawing: I love expressing creativity through drawing. It’s a relaxing and fulfilling hobby that allows me to explore new ideas visually.',
  ];
  softSkills: string[] = [
    'Curious and creative mindset, with a passion for solving challenges and learning new technologies.',
    'Highly adaptable and proactive, with a strong drive for self-improvement and growth.',
    'Excellent organizational skills, allowing for efficient multitasking and project management.',
    'Team player with exceptional collaborative abilities, capable of contributing effectively to group efforts.',
    'Strong communication skills, both in English (fluent) and Spanish, cultivated through a bilingual upbringing and constant practice.',
    'Detail-oriented and committed to delivering high-quality work in all areas of development.',
    'Culturally aware and empathetic, with a love for traveling and learning from people of diverse backgrounds.',
  ];
}
