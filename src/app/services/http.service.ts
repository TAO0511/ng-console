import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  request(route: any, params: any): any {
    let url = route.url,
      method = route.method;
    let observable :any = this.http.get < Object > (url, { params: params });
    switch (method) {
      case 'get':
        observable = this.http.get < Object > (url, { params: params });
        break;
      case 'post':
        observable = this.http.post < Object > (url, { params: params });
        break;
      case 'put':
        observable = this.http.put < Object > (url, { params: params });
        break;
      case 'delete':
        observable = this.http.delete < Object > (url, { params: params });
        break;
      default:
        break;
    }
    return new Promise((resolve, reject) => {
      if (observable) {
        observable.subscribe((data) => {
          console.log('data', data);
          resolve(data)
        }, (error) => {
          reject(error);
        })
      } else {
        reject('请求失败');
      }

    })

  }

}
