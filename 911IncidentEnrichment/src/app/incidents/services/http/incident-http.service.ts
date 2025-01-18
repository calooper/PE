import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherRequestParams } from '../../models/weather-query.interface';

@Injectable({
  providedIn: 'root',
})
export class IncidentHttpService {
  //This should not be exposed. I would normally add it as an EV
  private readonly token = 'f4ecf58d3amshb8e6efd6e7d5379p1d8161jsn5f5941b9ba95';
  private readonly weatherUrl =
    'https://meteostat.p.rapidapi.com/point/monthly';

  constructor(private readonly http: HttpClient) {}

  getWeatherData(params: WeatherRequestParams): Observable<any> {
    const url = `${this.weatherUrl}?lat=${params.lat}&lon=${params.lon}&start=${params.start}&end=${params.end}`;

    return this.http.get(url, {
      headers: {
        'x-rapidapi-key': this.token,
        'x-rapidapi-host': 'meteostat.p.rapidapi.com',
      },
    });
  }
}
