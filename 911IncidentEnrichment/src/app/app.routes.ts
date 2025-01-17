import { Routes } from '@angular/router';
import { IncidentDataUploadComponent } from './incidents/components/incident-data-upload/incident-data-upload.component';

export const routes: Routes = [
    { path: '', component: IncidentDataUploadComponent},
    {
        path: '**',
        component: IncidentDataUploadComponent
    }, 
];
