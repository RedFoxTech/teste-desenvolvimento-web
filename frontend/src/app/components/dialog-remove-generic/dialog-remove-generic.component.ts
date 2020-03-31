import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: "dialog-remove-generic",
  templateUrl: "./dialog-remove-generic.component.html"
})
export class DialogRemoveGeneric {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveGeneric>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}