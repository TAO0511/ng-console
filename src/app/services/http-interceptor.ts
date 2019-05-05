import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest < any > , next: HttpHandler):
    Observable < HttpEvent < any >> {
      let headers = {
        'Auth' : '00000000055555'
      }
      let secureReq = req.clone({
        setHeaders: headers,
      });
      // console.log('secureReq', secureReq);
      return next.handle(secureReq);
    }
}
