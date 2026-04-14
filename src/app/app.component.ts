import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html', // Points to the HTML template file
  styleUrls: ['./app.component.css'] // Points to the CSS styles for this component
})
export class AppComponent {
  title = 'Portfolio'; // The main title displayed on the page
  name = 'Carlos Marruedo';
  jobTitle = 'Frontend Developer';
  email = 'carlosmarruedo@gmail.com';

  // Tech stack data
  languages = ['JavaScript', 'HTML', 'CSS', 'C#', 'C++', 'Java', 'PHP', 'SQL'];
  frameworks = ['React', 'Angular', 'jQuery', 'Cordova', 'Unity'];
  databases = ['MongoDB', 'SQL'];
  tools = ['Git', 'Docker', 'JIRA', 'Scrum', 'AVEVA', 'Ignition', 'Wonderware'];

  // Experience data
  experiences = [
    {
      title: 'Technical Analyst',
      company: 'Mindden/Aquatec',
      period: 'Jul. 2022 — May. 2024',
      achievements: [
        'Developed SCADA projects with System Platform (AVEVA) for Aguas de Barcelona',
        'Applied Scrum methodology in project development',
        'Used Wonderware and Ignition to automate and control water treatment processes'
      ],
      responsibilities: [
        'Participated in SCADA projects for water treatment automation',
        'Implemented control systems using AVEVA System Platform',
        'Collaborated in multidisciplinary teams using agile methodologies'
      ]
    },
    {
      title: 'Programmer',
      company: 'Park4Dis',
      period: 'Jun. 2019 — Apr. 2021',
      achievements: [
        'Created a parking space location system for people with reduced mobility',
        'Developed both web platform and mobile application',
        'Implemented monetization systems for online content'
      ],
      responsibilities: [
        'Front-End development using JavaScript, HTML, and PHP',
        'Database implementation and maps API integration',
        'Mobile application development for user accessibility',
        'Administrator platform for parking statistics management'
      ]
    }
  ];

  // Projects data
  projects = [
    {
      name: 'Park4dis Mobile',
      description: 'Mobile application using Java, REST, and Cordova, optimizing performance and user experience with real-time notifications, geolocation, and customization options.',
      technologies: ['Java', 'REST', 'Cordova', 'JQuery', 'PHP', 'SQL']
    },
    {
      name: 'Minishell',
      description: 'Mini shell implementation in C, focusing on command interpreters, processes, and signals, implementing command execution, file navigation, and environment variable management.',
      technologies: ['C'],
      links: [
        { text: 'GitHub', url: 'https://github.com/Zalexe/minishell' }
      ]
    },
    {
      name: 'Inception',
      description: 'Virtual environment development with Docker, configuring and orchestrating containers to simulate a network, learning about virtualization and resource management.',
      technologies: ['Docker'],
      links: [
        { text: 'GitHub', url: 'https://github.com/Zalexe/Inception' }
      ]
    }
  ];

  // You can add methods here for component logic
  // For example: updateProfile() { this.name = 'New Name'; }
}
