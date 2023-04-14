import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [{
    name: 'Pokedex',
    technologies: 'JavaScript | Rest-Api | HTML | CSS',
    description: 'Based on the PokéAPI a simple libary that provides and catalogues pokémon information',
    link: '',
    github: '',
    img: 'pokedex.png'

  }, {
    name: 'Join',
    technologies: 'JavaScript | HTML | CSS',
    description: 'Task manager inspired by the Kanban System. Create and organize task using drag and drop functions, assign users and categories. This project was developed by group work.',
    link: '',
    github: '',
    img: 'join.png'
  }, {
    name: 'Elves of Fate',
    technologies: 'JavaScript | HTML | SCSS',
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help the last remaining elf to find spellbooks and mana poisons to fight against the attacking orcs. ',
    link: '',
    github: '',
    img: 'elves.png'
  }
  ]
}
