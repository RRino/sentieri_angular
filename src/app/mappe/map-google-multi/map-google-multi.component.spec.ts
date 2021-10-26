import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGoogleMultiComponent } from './map-google-multi.component';

describe('MapGoogleMultiComponent', () => {
  let component: MapGoogleMultiComponent;
  let fixture: ComponentFixture<MapGoogleMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapGoogleMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGoogleMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
