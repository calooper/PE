import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { IncidentService } from '../../services/state/incident.service';
import { Address, IncidentData } from '../../models/incident-details.interface';
import { IncidentDetailsComponent } from '../incident-details/incident-details.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-incidents-map',
  standalone: true,
  imports: [
    LeafletModule,
    MatCardModule,
    IncidentDetailsComponent,
    CommonModule,
  ],
  templateUrl: './incidents-map.component.html',
  styleUrl: './incidents-map.component.scss',
})
export class IncidentsMapComponent {
  map: any;
  markers: Marker[] = [];
  showDetails = false;
  private readonly incidentService = inject(IncidentService);
  private readonly markerUrl =
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';

  ngOnInit(): void {
    this.initMap();
    this.subscribeToIncidentData();
  }

  initMap(): void {
    this.map = L.map('map').setView([37.7749, -122.4194], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map,
    );
  }

  private subscribeToIncidentData(): void {
    this.incidentService.getIncidentData().subscribe((parsedData) => {
      if (parsedData) {
        this.updateMarkers(parsedData);
      }
    });
  }

  addPrimaryLocation(address: Address) {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
    const lat = address?.latitude;
    const lon = address?.longitude;
    if (lat && lon) {
      this.map.setView([lat, lon], 13);
      const markerSite = L.marker([lat, lon], {
        icon: icon({
          iconUrl: this.markerUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      }).addTo(this.map);
      markerSite.bindPopup(`<b>Street:</b> ${address.address_line1}`);
      this.markers.push(markerSite);
    }
  }
  updateMarkers(data: IncidentData): void {
    this.showDetails = true;
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    const incidents = data?.apparatus || [];
    this.addPrimaryLocation(data.address);

    incidents.forEach((incident: any) => {
      const latitude = incident.unit_status.arrived.latitude;
      const longitude = incident.unit_status.arrived.longitude;
      const unitId = incident.unit_id;
      const station = incident.station;
      const marker = L.marker([latitude, longitude], {
        icon: icon({
          iconUrl: this.markerUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      }).addTo(this.map);

      marker.bindPopup(`
        <b>Unit ID:</b> ${unitId}
        <b>Station:</b> ${station}`);
      this.markers.push(marker);
    });
  }
}
