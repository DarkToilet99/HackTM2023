import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptInterceptor implements HttpInterceptor {

  constructor() {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request.headers.set("Access-Control-Allow-Origin", "*");
    request.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    request.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    request.headers.set("Access-Control-Expose-Headers", "X-Custom-Header");
    return next.handle(request);
  }
}
