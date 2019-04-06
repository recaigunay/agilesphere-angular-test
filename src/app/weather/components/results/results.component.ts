import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  @Input() cityListFormatted=[];
  constructor() { }

}


