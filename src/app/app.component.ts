import { Component ,ViewChild} from '@angular/core';
import {MapInfoWindow} from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MapInfoWindow, {static: false}) info: MapInfoWindow;
  title = 'sitoc';

}