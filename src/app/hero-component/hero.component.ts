import { HeroService } from './../services/hero.service';
import { Hero } from '../objects/hero';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   title = 'Tour of Heroes';
   selectedHero: Hero;
   heroes: Hero[];
   constructor(
     private heroService: HeroService,
     private router: Router  
   ) { }

   ngOnInit(): void {
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
   }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

