import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Pokemon } from "@models/pokemon.model";

@Component({
  selector: "dialog-remove-pokemon",
  templateUrl: "./dialog-remove-pokemon.component.html"
})
export class DialogRemovePokemon {
  constructor(
    public dialogRef: MatDialogRef<DialogRemovePokemon>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon
  ) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}