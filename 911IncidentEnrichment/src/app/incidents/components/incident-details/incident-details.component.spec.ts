import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentDetailsComponent } from './incident-details.component';

describe('IncidentDetailsComponent', () => {
  let component: IncidentDetailsComponent;
  let fixture: ComponentFixture<IncidentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
