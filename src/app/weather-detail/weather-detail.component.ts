import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../weather/get-weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../weather'

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  weather: Weather;

  constructor(
    private getWeatherService: GetWeatherService,
    private route: ActivatedRoute,
  ) { }

  getWeather(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getWeatherService.getWeather(id)
      .subscribe(weather => this.weather = weather);
  }

  ngOnInit(): void {
    this.getWeather();
  }
}
