import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentOverviewComponent } from './incident-overview.component';

describe('IncidentOverviewComponent', () => {
  let component: IncidentOverviewComponent;
  let fixture: ComponentFixture<IncidentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
