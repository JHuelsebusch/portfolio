import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio | Janis Hülsebusch';

  ngOnInit(): void {
    AOS.init();
  }

  scroll(id: HTMLElement) {
   id.scrollIntoView();
  }
}
