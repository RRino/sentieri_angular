import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaLeafletComponent } from './mappa-leaflet.component';

describe('MappaLeafletComponent', () => {
  let component: MappaLeafletComponent;
  let fixture: ComponentFixture<MappaLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappaLeafletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappaLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
