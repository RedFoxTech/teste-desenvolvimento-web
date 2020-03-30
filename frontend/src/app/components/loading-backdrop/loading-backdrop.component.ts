import { Component, Input } from "@angular/core";

@Component({
  selector: "loading-backdrop",
  templateUrl: "./loading-backdrop.component.html",
  styleUrls: ["./loading-backdrop.component.css"]
})
export class LoadingBackdropComponent {
  @Input() visible: boolean;

  constructor() {}
}