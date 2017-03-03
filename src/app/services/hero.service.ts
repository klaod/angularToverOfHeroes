import { Injectable } from '@angular/core';
import { Hero } from '../objects/hero';
import { HEROES } from '../objects/moke-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}

