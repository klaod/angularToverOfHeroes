import { HeroService } from './hero.service';
import { Hero } from './objects/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

