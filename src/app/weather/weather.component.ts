import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './get-weather.service';
import { Weather } from '../weather';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weathers: Weather[];
  locationWeather: Weather;
  show: Boolean = false;
  addWeatherForm: FormGroup;

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
    this.addWeatherForm = this.formBuilder.group({
      location: ['', Validators.required],
      main: ['', Validators.required],
      temp: ['', Validators.required],
      humidity: ['', Validators.required],
    });
  }

  delete(weather: Weather) {
    this.getWeatherService.deleteWeather(weather).subscribe(() => {
      this.getWeather();
    });
  }

  toggle() {
    this.show = true;
  }

  // get f() {
  //   return this.addWeatherForm.controls;
  // }

  add() {    
    if (this.addWeatherForm.invalid) {
      return;
    }
    this.getWeatherService.addWeather(this.addWeatherForm.value as Weather)
      .subscribe(weather => {
        this.weathers.push(weather);
      });
    this.show = false;
  }
}
