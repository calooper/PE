import { Component } from '@angular/core';
import { IncidentDataUploadComponent } from '../incident-data-upload/incident-data-upload.component';
import { IncidentsMapComponent } from '../incidents-map/incidents-map.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
@Component({
  selector: 'app-incident-overview',
  standalone: true,
  imports: [IncidentDataUploadComponent, IncidentsMapComponent, MatCardModule, MatFormFieldModule], 
  templateUrl: './incident-overview.component.html',
  styleUrl: './incident-overview.component.scss'
})
export class IncidentOverviewComponent {

}
