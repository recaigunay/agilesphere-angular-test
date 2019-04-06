import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { StoreModule, Store } from "@ngrx/store";
import * as  weatherReducer from './store/reducers/weather';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';

import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: Store<weatherReducer.weatherState>
  let initialState: weatherReducer.weatherState = {
    cityList: [], // MockData,
    loading: false,
    loaded: true,
    error: ""
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer, ResultsComponent, SearchComponent ],
      imports: [StoreModule.forRoot(weatherReducer)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [StoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.returnValue(of(initialState));

    fixture = TestBed.createComponent(WeatherContainer);
    fixture.componentInstance.cityListFormatted = initialState.cityList;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('should compile correctly', () => {
  //   fixture.detectChanges();
  //   expect(fixture).toMatchSnapshot();
  // });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  })



});
