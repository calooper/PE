import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-incident-data-upload',
  standalone: true,
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
  styleUrl: './incident-data-upload.component.scss'
})
export class IncidentDataUploadComponent {
  
  fileToUpload: File | null = null;
  locationData: { lat: number; lon: number }[] = [];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
      this.extractLocationData(file);
    }
  }

  extractLocationData2(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;

      console.log('fileData', fileData);

    };
    reader.readAsText(file);
  }

  extractLocationData(file: File): void {

    this.locationData = [
      { lat: 39.7392, lon: -104.9903 }, 
      { lat: 34.0522, lon: -118.2437 }  
    ];
  }

  sendToMap(): void {
    console.log('Sending to map', this.locationData);
  }

  onFilesDropped(event: Event) {
  }
}
