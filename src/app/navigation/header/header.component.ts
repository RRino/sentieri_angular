import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SidenavListComponent } from '../sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  @Input() show: boolean = false;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
   //show: boolean = false;
   isOpen: boolean;
   mieclassi:any ;
   leftOpen: any;
   leftClose:any;

  @ViewChild('drawer') drawer: any;

  //isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 1000px)')
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );




  constructor(private breakpointObserver: BreakpointObserver) {




  }
  ngOnInit() {

  }


  closeSideNav() {
      if (this.drawer._mode=='side') {
      this.drawer.close();
      this.show = true;
     }
     console.log('chiuso ');
     this.leftClose = false;
     this.drawer.close();
     this.leftClose = true;
     this.leftOpen = false;
    }

    navOpen($event: any): void {
      this.show = true;// sempre aperta
      this.leftClose = true;
      console.log('aperto ');
      this.leftClose = false;
      this.leftOpen = true;
    }


}
