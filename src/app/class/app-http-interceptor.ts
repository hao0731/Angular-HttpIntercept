import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {}
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authRequest = req.clone({ setHeaders: {Authotization: 'Bearer 123456'}})
        return next.handle(authRequest)
    }
}
