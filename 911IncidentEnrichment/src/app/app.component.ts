import {  Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncidentDetailsComponent } from './incidents/components/incident-details/incident-details.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, IncidentDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '911IncidentEnrichment';
}
