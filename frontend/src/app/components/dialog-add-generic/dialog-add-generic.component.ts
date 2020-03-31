import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: "dialog-add-generic",
  templateUrl: "./dialog-add-generic.component.html"
})
export class DialogAddGeneric {
  genericValue: string = this.data.value;

  constructor(
    public dialogRef: MatDialogRef<DialogAddGeneric>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm() {
    this.dialogRef.close(this.genericValue);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}