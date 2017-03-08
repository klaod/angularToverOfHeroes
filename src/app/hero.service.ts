import { Hero } from './objects/hero';
import { HEROES } from './objects/moke-heroes';
import { Injectable } from '@angular/core';
@Injectable()
export class HeroService {
  
  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
}
