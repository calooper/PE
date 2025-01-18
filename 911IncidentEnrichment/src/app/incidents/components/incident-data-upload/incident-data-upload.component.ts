import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IncidentService } from '../../services/state/incident.service';
import { WeatherRequestParams } from '../../models/weather-query.interface';
@Component({
  selector: 'app-incident-data-upload',
  standalone: true,
  providers: [DatePipe],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    DragDropModule,
  ],
  templateUrl: './incident-data-upload.component.html',
  styleUrl: './incident-data-upload.component.scss',
})
export class IncidentDataUploadComponent {
  fileToUpload: File | null = null;
  weatherParams: WeatherRequestParams | null | undefined;

  constructor(
    private readonly incidentService: IncidentService,
    private readonly datePipe: DatePipe,
  ) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
    }
  }

  extractWeatherParams(fileData: string): WeatherRequestParams | null {
    try {
      const parsed = JSON.parse(fileData);
      return {
        lat: parsed?.address?.latitude,
        lon: parsed?.address?.longitude,
        start:
          this.datePipe.transform(
            parsed?.description?.event_closed,
            'yyyy-MM-dd',
          ) ?? '',
        end:
          this.datePipe.transform(
            parsed?.description?.event_closed,
            'yyyy-MM-dd',
          ) ?? '',
      };
    } catch (error) {
      console.error('Error parsing file data:', error);
      return null;
    }
  }

  async parseFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
      reader.readAsText(file);
    });
  }

  async sendToMap(): Promise<void> {
    try {
      const parsedData = await this.parseFile(this.fileToUpload as File);
      const weatherParams = this.extractWeatherParams(parsedData);
      this.incidentService.setIncidentData(JSON.parse(parsedData));
      if (weatherParams) {
        this.incidentService.fetchAndSetWeatherData(weatherParams).subscribe();
      } else {
        console.error('Failed to extract weather parameters');
      }
      this.fileToUpload = null;
    } catch (error) {
      console.error('Error processing file:', error);
    }
  }
}
