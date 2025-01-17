import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentDataUploadComponent } from './incident-data-upload.component';

describe('IncidentDataUploadComponent', () => {
  let component: IncidentDataUploadComponent;
  let fixture: ComponentFixture<IncidentDataUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentDataUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
