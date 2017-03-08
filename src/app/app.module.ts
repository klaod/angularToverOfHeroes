import { HeroService } from './services/hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroComponent } from './hero-component/hero.component';
import { HeroDetailComponent } from './hero-detail-component/hero-detail-component.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
