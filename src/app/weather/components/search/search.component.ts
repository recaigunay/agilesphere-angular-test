import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  @Output()
  searchedCity = new EventEmitter<string>();
  
  constructor() { }

  search(value) {
    this.searchedCity.emit(value)
  }
}
