import { Marker } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-map-google-multi',
  templateUrl: './map-google-multi.component.html',
  styleUrls: ['./map-google-multi.component.css']
})

  export class MapGoogleMultiComponent  {

    title = 'My first AGM project';
    lat = 44.678418;
    lng = 11.809007;


//1.) to use or display google map you have to first install @agm/core package

//2.) import thet @agm/core package in app.module.ts file

// 3.) write this in import AgmCoreModule.forRoot({
//                       apiKey:              'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw',
//                       libraries: ['places', 'drawing', 'geometry'],

//     }) 
// 4.) then write this in HTML  <agm-map [latitude]="lat" [longitude]="lng"
//           [fullscreenControl]='true' [mapTypeControl]='true' [fitBounds]="true">
//               <agm-marker *ngFor="let coordinate of start_end_mark; let i=index"
//               [latitude]="coordinate[0]"
//               [longitude]="coordinate[1]" [agmFitBounds]="true"></agm-marker>
//               <agm-polyline [visible]="true" [strokeWeight]="3" [strokeColor]="'#07b57a'">
//                     <agm-polyline-point
//                     *ngFor="let coordinate of latlng; let i=index"
//                     [latitude]="coordinate[0]"
//                     [longitude]="coordinate[1]">

// </agm-polyline-point>
// </agm-polyline>
//             </agm-map>

// here arg-map is for showing map, [fitBounds] is for focuse on marker, agm-marker is use for displaying the markes on map, agm-polyline is use for drowing a connected line on the lat-log


start_end_mark =  [[44.0285312,11.5262336],[44.0285312,11.4262336],[44.0285312,11.4962336],[44.1285312,11.4262336]]
  ;
 

latlng = [[44.0285312,11.62336],[44.0312,11.6262336],[44.0205312,11.4936],[44.12812,11.42336]];
latlng2 = [[43.1225312,12.12336],[43.1312,12.1362336],[43.124312,12.1936],[43.2242,12.32336]];

constructor() {
  // this i write because to display a marks on first place and last place
 /* this.start_end_mark.push(this.latlng[0][0]);
  this.start_end_mark.push(this.latlng[0][1]);
  this.start_end_mark.push(this.latlng[1][0]);
  this.start_end_mark.push(this.latlng[1][1]);*/
console.log(this.start_end_mark);
console.log(this.latlng[0][0]+' '+this.latlng[0][1]+' 1 '+this.latlng[1][0]+' '+this.latlng[1][1]);
  //this.start_end_mark.push(this.latlng2[0]);
  //this.start_end_mark.push(this.latlng2[this.latlng2.length - 1]);
 }

ngOnInit() {}
}

