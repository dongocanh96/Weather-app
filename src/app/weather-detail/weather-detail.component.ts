import { Component, OnInit, Input } from '@angular/core';
import { GetWeatherService } from '../weather/get-weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../weather';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  @Input() weather: Weather

  constructor(
    private getWeatherService: GetWeatherService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  getWeather(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.getWeatherService.getWeather(id)
      .subscribe(weather => this.weather = weather);
    }
    
  }

  ngOnInit(): void {
    this.getWeather();
  }

  save(): void {
   this.getWeatherService.updateWeather(this.weather)
    .subscribe(() => {
      this.router.navigate([''])
    });
  }
}
