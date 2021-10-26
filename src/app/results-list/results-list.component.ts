import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NominatimResponse} from '../model/nominatim-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent {

  @Input()
  results: NominatimResponse[];

  @Output()
  locationSelected = new EventEmitter();

  constructor () {
  }

  selectResult (result: NominatimResponse) {
    this.locationSelected.emit(result);
  }

}
