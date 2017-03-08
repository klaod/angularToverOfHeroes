import { Injectable } from '@angular/core';
import { Hero } from '../objects/hero';
import { HEROES } from '../objects/moke-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
}

