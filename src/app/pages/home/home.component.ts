import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "", cols: 2, rows: 1 ,content:'https://www.caibo.it/images/headers/corno_1.jpg',link:''},
          { title: 'Titolo', cols: 2, rows: 1,content:'http://localhost/caibo/images/castelluccio.jpg',link:'http://caibo.it/scuole/escursioni/escursioni' },
          { title: 'Card 3', cols: 2, rows: 1 ,content:'c3'},
          { title: 'Card 4', cols: 2, rows: 1,content:'c4' }
        ];
      }

      return [
        { title: '', cols: 2, rows: 2,content:'https://www.caibo.it/images/headers/corno_2.jpg',link:'' },
        { title: 'Card 2', cols: 1, rows: 1, content:'http://localhost/caibo/images/castelluccio.jpg',link:'http://caibo.it/scuole/escursioni/escursioni' },
        { title: 'Card 3', cols: 1, rows: 1 ,content:'ce31'},
        { title: 'Card 4', cols: 1, rows: 1 ,content:'c341'},
        { title: 'Card 5', cols: 1, rows: 1 ,content:'c351'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
