import { HeroService } from '../hero.service';
import { Hero } from '../objects/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   title = 'Tour of Heroes';
   selectedHero: Hero;
   heroes: Hero[];
   constructor(private heroService: HeroService) { }

   ngOnInit(): void {
     this.getHeroesSlowly();
   }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
   getHeroesSlowly(): void {
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }
}

