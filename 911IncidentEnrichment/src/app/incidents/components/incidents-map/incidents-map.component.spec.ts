import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsMapComponent } from './incidents-map.component';

describe('IncidentsMapComponent', () => {
  let component: IncidentsMapComponent;
  let fixture: ComponentFixture<IncidentsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
