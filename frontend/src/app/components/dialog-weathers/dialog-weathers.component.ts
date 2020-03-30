import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Weather } from "@models/weather.model";

@Component({
  selector: "dialog-weathers",
  templateUrl: "./dialog-weathers.component.html"
})
export class DialogWeathersComponent {
  weatherOne: Weather;
  weatherTwo: Weather;
  get weathers() {
    return { weatherOne: this.weatherOne, weatherTwo: this.weatherTwo }
  }

  constructor(
    public dialogRef: MatDialogRef<DialogWeathersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Weather[]
  ) {}

  onConfirm() {
    this.dialogRef.close(this.weathers);
  }

  onCancel() {
    this.dialogRef.close();
  }
}