import { Action } from '@ngrx/store';
import { Summary } from '../../../model/weather';

export enum WeatherActionTypes {
    LOAD_CITYLIST = "[Weather] Load CityList",
    LOAD_CITYLIST_SUCCESS = "[Weather] Load CityList Success",
    LOAD_CITYLIST_FAIL = "[Weather] Load CityList Fail",
    SEARCH_CITY = "[Weather] Search City",
    SEARCH_CITY_SUCCESS = "[Weather] Search City Success",
    SEARCH_CITY_FAIL = "[Weather] Search City Fail",
}

export class LoadCityList implements Action {
    readonly type = WeatherActionTypes.LOAD_CITYLIST;
}
export class LoadCityListSuccess implements Action {
    readonly type = WeatherActionTypes.LOAD_CITYLIST_SUCCESS;
    constructor(public payload: Summary[]) { }
}

export class LoadCityListFail implements Action {
    readonly type = WeatherActionTypes.LOAD_CITYLIST_FAIL;
    constructor(public payload: string) { }
}

export class SearchCity implements Action {
    readonly type = WeatherActionTypes.SEARCH_CITY;
    constructor(public payload: string) {}
}

export class SearchCitySuccess implements Action {
    readonly type = WeatherActionTypes.SEARCH_CITY_SUCCESS;
    constructor(public payload: Summary) { }
}

export class SearchCityFail implements Action {
    readonly type = WeatherActionTypes.SEARCH_CITY_FAIL;
    constructor(public payload: string) { }
}

export type Action = LoadCityList | LoadCityListSuccess | LoadCityListFail | SearchCity | SearchCitySuccess | SearchCityFail