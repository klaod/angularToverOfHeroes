import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}
