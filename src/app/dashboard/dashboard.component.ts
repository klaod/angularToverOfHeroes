import { Component, OnInit } from '@angular/core';
import { Hero } from '.././objects/hero';
import { HeroService } from '.././services/hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then( heroes => this.heroes = heroes.slice(1,5) );
  }
}
