import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class RestapiService 
{
  regUrl = "http://localhost:3000/user";
  loginUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }
  message:any;
  postData(userData:any): Observable<any[]> {
    return this.http.post<any>(this.regUrl, userData);
  }
  login(credentials:any):Observable<any[]>
  {
    return this.http.post<any>(this.loginUrl,credentials);
  }
}
