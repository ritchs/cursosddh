import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private http: HttpClient
  ) { }

  getPlace(): Observable<any> {

    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const data = { params: new HttpParams(), headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.get('http://api.cursosddh.com/v1/system/place', data);
  }

  addPlace(data: any): Observable<any> {

    const params = new HttpParams({ fromObject: data });
    const sessionkey = btoa(`sessionkey:${localStorage.getItem('sessionkey')}`);
    const otpions = { headers: new HttpHeaders().set('Authorization', `Basic ${sessionkey}`) };

    return this.http.post('http://api.cursosddh.com/v1/system/place', params, otpions);
  }
}