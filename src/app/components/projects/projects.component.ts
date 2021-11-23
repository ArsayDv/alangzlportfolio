import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [

    new Project("index.html", "#", "../../../assets/img/project-1.png", "My Portfolio - 2021", "This is my 2021 portfolio", ["Html", "Css", "JavaScript", "Angular", "Heroku"]),
    new Project("https://portafolioarsay.glitch.me", "https://github.com", "../../../assets/img/project-2.png", "My Previous Portfolio -2021 ", "This is my previous portfolio", ["Html", "Css", "JavaScript", "jQuery", "Glitch"]),
    new Project("https://bootstoredev.glitch.me", "https://github.com", "../../../assets/img/project-3.png", "Bootstoredev", "Website Developed With Bootstrap", ["Html", "Bootstrap", "Glitch"]),
    new Project("https://portfoliobasic.glitch.me", "https://github.com", "../../../assets/img/project-4.png", "Portfolio Web Basic", "Basic Web Portfolio, one of my first projects with css and html", ["Html", "Css"]),
    new Project("https://coffedev.glitch.me", "https://github.com", "../../../assets/img/project-5.png", "DevCoffe", "Restaurant themed website with parallax effect ", ["Html", "Css", "JavaScript", "jQuery", "Glitch"])

  ]

  @ViewChild('webs') projectsContainer!: ElementRef;

  ngAfterViewInit() {
    for (let i = 0; i < this.projects.length; i++) {
      let project = document.createElement('div');
      project.setAttribute('class', 'project');
      project.setAttribute('id', 'project');
      let webs = document.getElementById('webs')
      project.innerHTML = `
        <a href="${this.projects[i].url}" target="_BLANK"><img src="${this.projects[i].image}" alt="Project 2"></a>
        <h1 class="text-primary d-flex">
          <a href="${this.projects[i].url}" target="_BLANK">${this.projects[i].title}<i class='bx bx-link-external'></i></a>
          <span class="mx-2 mb-0 ml-1 mr-1 text-xl text-gray-600 font-body" style="color: #333">
              •
          </span>
          <a href="${this.projects[i].repoGithub}" target="_BLANK" class="text-dark">
            <i class='bx bxl-github'></i>
          </a>
        </h1>
        <p>${this.projects[i].description}</p>
      `;
      const technologies = document.createElement('div');
      technologies.setAttribute('class', 'technologies');
      for (let badge = 0; badge < this.projects[i].technologies.length; badge++) {
        const badgeh1 = document.createElement('h1');
        badgeh1.setAttribute('class', 'badge')
        badgeh1.innerHTML = `${this.projects[i].technologies[badge]}`
        technologies.appendChild(badgeh1)
      }
      project.appendChild(technologies)

      webs?.appendChild(project)
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
