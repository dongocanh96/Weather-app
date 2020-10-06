import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './get-weather.service';
import { Weather } from '../weather';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[];
  locationWeather: Weather;
  addInfoForm: FormGroup;

  constructor(
    private getWeatherService: GetWeatherService,
    private formBuilder: FormBuilder,
  ) { }

  getWeather(): void {
    this.getWeatherService.getInfo()
      .subscribe(weathers => {
        this.weathers = weathers
      });
  }

  ngOnInit(): void {
    this.getWeather();
  }

  delete(weather: Weather) {
    this.getWeatherService.deleteWeather(weather).subscribe(() => {
      this.getWeather();
    });
  }

  add()
}
