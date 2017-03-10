import { Hero } from '../objects/hero';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()
    hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
     this.route.params
    .switchMap((params: Params) => this.heroService.getHeroSlowly(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
