import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const weathers = [
      { id: 1, location: "London", main: "Drizzle", temp: 37, humidity: 81 },
      { id: 2, location: "Hanoi", main: "Clouds", temp: 30, humidity: 83 },
      { id: 3, location: "Europe", main: "Clouds", temp: 28, humidity: 81 },
      { id: 4, location: "North America", main: "Clear", temp: 28, humidity: 43 },
      { id: 5, location: "Belarus", main: "Rain", temp: 28, humidity: 93 },
      { id: 6, location: "Kieve", main: "Clouds", temp: 28, humidity: 92 },
      { id: 7, location: "New Delhi", main: "Haze", temp: 29, humidity: 73 },
      { id: 8, location: "Sydney", main: "Clouds", temp: 29, humidity: 82 },
      { id: 9, location: "Kingdom of Sweden", main: "Fog", temp: 28, humidity: 100 },
    ];
    return {weathers};
  }

  genId(weathers: Weather[]): number {
    return weathers.length > 0 ? Math.max(...weathers.map(weather => weather.id)) + 1 : 1;
  }

  constructor() {}
}
