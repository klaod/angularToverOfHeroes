import { HeroService } from './../services/hero.service';
import { Hero } from '../objects/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'heroes',
  templateUrl: './hero.component.html',
  //providers: [HeroService],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   title = 'Tour of Heroes';
   selectedHero: Hero;
   heroes: Hero[];
   constructor(private heroService: HeroService) { }

   ngOnInit(): void {
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
   }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
}

