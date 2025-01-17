import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {

  private readonly weatherUrl = ''; //TODO add in my weather api url

  constructor(private readonly http: HttpClient) {}

  getWeatherData(location: string, date: string): Observable<any> {
    return this.http.get(``);
  }
}
