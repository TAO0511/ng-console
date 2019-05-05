import { HeroService } from './services/hero.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'console';
  constructor(private heroService: HeroService) {
    this.getHero(11);
  }

  getHero(id) {
    let params = {
      id: id
    }
    this.heroService.getHeroes(params).then(res => {
      console.log(res);
    });
  }
}
