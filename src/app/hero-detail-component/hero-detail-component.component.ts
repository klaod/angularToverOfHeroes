import { Hero } from './../objects/hero';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail-component',
  templateUrl: './hero-detail-component.component.html',
  styleUrls: ['./hero-detail-component.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()
    hero: Hero;


  constructor() { }

  ngOnInit() {
  }

}
