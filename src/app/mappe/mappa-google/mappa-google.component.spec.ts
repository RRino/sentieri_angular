import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaGoogleComponent } from './mappa-google.component';

describe('MappaGoogleComponent', () => {
  let component: MappaGoogleComponent;
  let fixture: ComponentFixture<MappaGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappaGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
