import { Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IncidentHttpService } from '../http/incident-http.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private readonly incidentHttpService: IncidentHttpService) {}

    private readonly weatherDataSignal = signal(null);
  
    fetchAndSetWeatherData(location: string, date: string): Observable<any> {
      return this.incidentHttpService.getWeatherData(location, date).pipe(
        tap(data => this.weatherDataSignal.set(data))
      );
    }
  
    getWeatherDataSignal(): Signal<any> {
      return this.weatherDataSignal;
    }
}
