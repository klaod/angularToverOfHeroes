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
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
    }
    delete(hero: Hero): void {
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }
}

