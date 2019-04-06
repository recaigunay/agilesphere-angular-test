import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { weatherEffect } from './weather';
import { WeatherService } from '../../weather.service'

describe('WeatherEffects', () => {
    let runner, weatherEffects, weatherService;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [
        
      ],
      providers: [
        weatherEffect,
        {
          provide: WeatherService,
          useValue: jasmine.createSpyObj('weatherService', ['searchWeatherForCity'])
        }
      ]
    }));

    beforeEach(() => {
        // runner = TestBed.get(weatherEffect);
        weatherEffects = TestBed.get(weatherEffect);
        weatherService = TestBed.get(WeatherService);
      });
      
  });