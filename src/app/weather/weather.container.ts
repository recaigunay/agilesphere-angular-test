import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SearchCity } from './store/actions/weather';
import * as selectors from '../weather/store/selectors/weather';
import { Summary } from '../model/weather';


@Component({
  selector: 'app-weather',
  template: `
  <app-search (searchedCity)="citySearch($event)"></app-search>
  <app-results [cityListFormatted]="cityListFormatted"></app-results>  `
})
export class WeatherContainer implements OnInit, OnDestroy {

  cityListFormatted: Summary[]
  errorMessage:string = ""
  subscribeStoreCity: any

  constructor(private store: Store<any>) { }

  citySearch(city) {
    this.store.dispatch(new SearchCity(city.value));
    city.value = "";
  }

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_CITYLIST' });

    this.subscribeStoreCity = this.store.select(selectors.selectWeatherState).subscribe(
      data =>    { 
        this.cityListFormatted = data.cityList;
        this.errorMessage = data.error;
       },
      err => console.log(err)
    )


  }

  ngOnDestroy() {
    this.subscribeStoreCity.unsubscribe();
  }

}
