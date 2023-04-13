import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = ['Angular','TypeScript','JavaScript','HTML','CSS/SCSS','GIT','Firebase','Scrum','Rest-Api','Material Design']
  skillImg = ['angular.png','typescript.png','javascript.png','html.png','css.png','git.png','firebase.png','scrum.png','rest-api.png','material-design.png'];

  
}
