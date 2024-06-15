import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/users/login`, data).pipe(
      map((res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.loggedIn.next(true);
        }
        return res; 
      }),
      catchError((error: any) => {
        console.error('Login error:', error);
        throw error; 
      })
    );
  }
  signIn(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/users/signin`, data).pipe(
      map((res: any) => {
        return res; 
      })
    );
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
