import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Weather } from "@models/weather.model";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private baseurl = "http://localhost:81";
  constructor(private httpClient: HttpClient) {}

  public getWeathers(): Observable<Weather[]> {
    const url = `${this.baseurl}/weathers/`;
    return this.httpClient.get<Weather[]>(url);
  }

  public getWeatherById(id: number): Observable<Weather> {
    const url = `${this.baseurl}/weather/id/${id}`;
    return this.httpClient.get<Weather>(url);
  }

  public getWeatherByName(name: string): Observable<Weather[]> {
    const url = `${this.baseurl}/weather/name/${name}`;
    return this.httpClient.get<Weather[]>(url);
  }

  public updateWeather(id: number, Weather: Weather): Observable<any> {
    const url = `${this.baseurl}/weather/${id}`;
    return this.httpClient.patch<any>(url, Weather);
  }

  public deleteWeather(id: number): Observable<any> {
    const url = `${this.baseurl}/weather/${id}`;
    return this.httpClient.delete<any>(url);
  }
}