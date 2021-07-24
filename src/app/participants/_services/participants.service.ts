import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {

    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const data = { params: new HttpParams(), headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.get('http://api.cursosddh.com/v1/system/participants', data);
  }
  getcourse(): Observable<any> {

    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const data = { params: new HttpParams(), headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.get('http://api.cursosddh.com/v1/system/course', data);
  }
  getplace(): Observable<any> {

    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const data = { params: new HttpParams(), headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.get('http://api.cursosddh.com/v1/system/place', data);
  }

  addUser(data: any): Observable<any> {

    const params = new HttpParams({ fromObject: data });
    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const otpions = { headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.post('http://api.cursosddh.com/v1/system/participants', params, otpions);
  }
}
