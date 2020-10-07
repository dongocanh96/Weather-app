import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  private weatherUrl = 'api/weathers';

  constructor(
    private http: HttpClient,
  ) { }

  getInfo(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.weatherUrl);
  }

  getWeather(id: number): Observable<Weather> {
    const url = `${this.weatherUrl}/${id}`;
    return this.http.get<Weather>(url);
  }

  deleteWeather(weather: Weather): Observable<Weather> {
    const id = weather.id;
    const url = `${this.weatherUrl}/${id}`;
    return this.http.delete<Weather>(url);
  }

  addWeather(weather: Weather): Observable<Weather> {
    return this.http.post(this.weatherUrl, weather ) as Observable<Weather>;
  }
}
