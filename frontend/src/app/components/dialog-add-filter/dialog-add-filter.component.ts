import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FilterOption } from "@pages/search/filter";

@Component({
  selector: "dialog-add-filter",
  templateUrl: "./dialog-add-filter.component.html",
  styleUrls: ["./dialog-add-filter.component.css"]
})
export class DialogAddFilterComponent {
  allOptions: boolean = false;
  currentOptions: any[] = this.data.map(option => {
    return { selected: false, ...option }
  });

  constructor(
    public dialogRef: MatDialogRef<DialogAddFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterOption[]
  ) {}

  onSelectAll(event) {
    this.allOptions = event;
    for (let option of this.currentOptions)
      option.selected = event;
  }

  onConfirm() {
    this.dialogRef.close(this.currentOptions);
  }

  onCancel() {
    this.dialogRef.close(this.currentOptions);
  }
}