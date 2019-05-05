import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { Routes } from '../model/route-config';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  getHeroes(params: any): any {
    Routes.HERO.getId['url'] =  Routes.HERO.getId['url'] + '/' + params.id;
    return this.httpService.request(Routes.HERO.getId, params);
  }

}
