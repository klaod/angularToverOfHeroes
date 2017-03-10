import { Injectable } from '@angular/core';
import { Hero } from '../objects/hero';
import { HEROES } from '../objects/moke-heroes';

@Injectable()
export class HeroService {

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 10);
    });
  }

  getHeroSlowly(id: number): Promise<Hero> {
    return this.getHeroesSlowly()
        .then(heroes => heroes.find(hero => hero.id === id));
  }
  
}

