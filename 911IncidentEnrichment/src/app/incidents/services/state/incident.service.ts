import { Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IncidentHttpService } from '../http/incident-http.service';
import { WeatherRequestParams } from '../../models/weather-query.interface';
import { IncidentData } from '../../models/incident-details.interface';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private readonly incidentHttpService: IncidentHttpService) {}

  private readonly weatherData = new BehaviorSubject<any>(null);  
  private readonly incidentData = new BehaviorSubject<IncidentData | null>(null);  

    fetchAndSetWeatherData(params: WeatherRequestParams): Observable<any> {
      return this.incidentHttpService.getWeatherData(params).pipe(
        tap(data => this.setWeatherData(data))
      );
    }

    setWeatherData(data: any): void {
      this.weatherData.next(data);
    }
  
    setIncidentData(data: IncidentData | null): void {
      this.incidentData.next(data);
    }
  
    getIncidentData(): Observable<IncidentData | null> {
      return this.incidentData.asObservable()
    }
  
    getWeatherData(): Observable<any> {
      return this.weatherData.asObservable()
    }

}
