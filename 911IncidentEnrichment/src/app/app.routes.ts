import { Routes } from '@angular/router';
import { IncidentOverviewComponent } from './incidents/components/incident-overview/incident-overview.component';

export const routes: Routes = [
    { path: '', component: IncidentOverviewComponent},
    {
        path: '**',
        component: IncidentOverviewComponent
    }, 
];
