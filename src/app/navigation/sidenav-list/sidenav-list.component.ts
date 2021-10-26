import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output("closeSideNav") closeSideNav: EventEmitter<any>  = new EventEmitter();

  drawer: any;
  leftClose: boolean;
  leftOpen: boolean;
  show: boolean;


  constructor() { }

  ngOnInit() {

  }


  closeSide() {
      this.closeSideNav.emit();
     }

}
