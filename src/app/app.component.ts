import { HeroService } from './services/hero.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'console';
  navList = [
    { url: '/', name: 'Dashboard', icon: 'dashboard' },
    {
      url: '',
      name: '数据',
      icon: 'mail',
      children: [
        { url: '/table', name: '表格', icon: '' }
      ]
    }
  ];
  constructor(private heroService: HeroService,
    private router: Router) {
    this.buildNav();
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

  selectNav(url) {
    this.router.navigate([url]);
  }

  buildNav() {
    let activeUrl = window.location.pathname;
    this.navList && this.navList.forEach(nav => {
      if (nav.children && nav.children.length > 0) {
        nav.children && nav.children.forEach(child => {
          if (child.url == activeUrl) {
            child['isSelected'] = true;
            nav['isOpen'] = true;
          }
        })
      } else {
        if (nav.url == activeUrl) {
          nav['isSelected'] = true;
        }
      }
    })
  }
}
