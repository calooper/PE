import { Component, inject, OnInit } from '@angular/core';
import { IncidentService } from '../../services/state/incident.service';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-incident-details',
  standalone: true,
  imports: [
    MatCardModule,
    JsonPipe,
    CommonModule,
    MatTableModule,
    NgxJsonViewerModule,
    MatInputModule,
  ],
  templateUrl: './incident-details.component.html',
  styleUrl: './incident-details.component.scss',
})
export class IncidentDetailsComponent implements OnInit {
  weatherData: any; //would normally define this as a type
  incidentData: any;
  private readonly incidentService = inject(IncidentService);

  ngOnInit(): void {
    this.subscribeToWeatherData();
    this.subscribeToIncidentData();
  }

  private subscribeToWeatherData(): void {
    this.incidentService.getWeatherData().subscribe((weatherData) => {
      if (weatherData) {
        this.weatherData = weatherData;
      }
    });
  }

  private subscribeToIncidentData(): void {
    this.incidentService.getIncidentData().subscribe((incidentData) => {
      if (incidentData) {
        this.incidentData = incidentData;
      }
    });
  }
}
