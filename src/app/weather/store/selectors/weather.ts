import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../reducers/weather';

export const selectRoot = createFeatureSelector<fromRoot.AppState>('weather');

export const selectWeatherState = createSelector(
    selectRoot,
    (state: fromRoot.AppState) =>  state
);

export const selectCityList = createSelector(
    selectRoot,
    (state: fromRoot.AppState) =>  state.cityList
);
export const selectIsLoading = createSelector(
    selectRoot,
    (state: fromRoot.AppState) =>  state.loading
);
export const selectLoaded = createSelector(
    selectRoot,
    (state: fromRoot.AppState) =>  state.loaded
);
export const selectError = createSelector(
    selectRoot,
    (state: fromRoot.AppState) =>  state.error
);

