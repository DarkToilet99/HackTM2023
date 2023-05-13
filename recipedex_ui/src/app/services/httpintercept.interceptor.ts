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
    let headers = ['Access-Control-Allow-Origin:*',
    'Access-Control-Allow-Methods:GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers:Content-Type']
    console.log("INTERCEPTED");
    request.headers.append("headers", headers);
    request.headers.set("Access-Control-Allow-Origin", "*")
    return next.handle(request);
  }
}
