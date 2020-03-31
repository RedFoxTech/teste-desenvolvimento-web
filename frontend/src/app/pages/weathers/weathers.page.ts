import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Weather } from "@models/weather.model";
import { WeatherService } from "@services/weather.service";

import { DialogRemoveGeneric } from "@components/dialog-remove-generic/dialog-remove-generic.component";
import { DialogAddGeneric } from "@components/dialog-add-generic/dialog-add-generic.component";

@Component({
  selector: "weathers-page",
  templateUrl: "./weathers.page.html",
  styleUrls: ["./weathers.page.css"]
})
export class WeathersPage implements OnInit {
  pageLoading: boolean = false;
  weatherList: Weather[];

  constructor(
    private weatherService: WeatherService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.weatherService.getWeathers()
      .subscribe(weathers => this.weatherList = weathers)
  }

  updateWeathers() {
    this.weatherService.getWeathers()
    .subscribe(weathers => {
      this.weatherList = weathers;
      this.pageLoading = false;
    })
  }

  onOpenRemoveDialog(weather: Weather) {
    const ref = this.dialog.open(DialogRemoveGeneric, {
      width: "250px",
      data: { name: weather.name, strongDescription: `(${weather.id}) - ${weather.name}`}
    });

    ref.afterClosed()
      .subscribe(result => {
        if (result) {
          this.pageLoading = true;
          this.weatherService.deleteWeather(weather.id)
            .subscribe(() => {
              this.updateWeathers();
            });
        }
      });
  }

  onOpenAddDialog() {
    const ref = this.dialog.open(DialogAddGeneric, {
      width: "250px",
      data: {
        title: "New weather",
        description: "Add new weather",
        label: "Weather name",
        placeholder: "Ex: Sunny"
      }
    });

    ref.afterClosed()
      .subscribe(name => {
        if (name) {
          this.pageLoading = true;
          this.weatherService.createWeather({ name })
            .subscribe(() => {
              this.updateWeathers();
            });
        }
      });
  }

  onOpenEditDialog(weather: Weather) {
    const ref = this.dialog.open(DialogAddGeneric, {
      width: "250px",
      data: {
        title: `Edit weather ${weather.name}`,
        description: `Edit weather ${weather.name} name`,
        label: "Weather name",
        placeholder: "Ex: Sunny",
        value: weather.name
      }
    });

    ref.afterClosed()
      .subscribe(name => {
        if (name) {
          this.pageLoading = true;
          this.weatherService.updateWeather(weather.id, {name})
            .subscribe(() => {
              this.updateWeathers();
            });
        }
      });
  }
}