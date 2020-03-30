import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PokemonType } from "@models/pokemonType.model";

@Component({
  selector: "dialog-pokemon-types",
  templateUrl: "./dialog-pokemon-types.component.html"
})
export class DialogPokemonTypesComponent {
  typeOne: PokemonType;
  typeTwo: PokemonType;
  get pokemonTypes() {
    return { typeOne: this.typeOne, typeTwo: this.typeTwo }
  }

  constructor(
    public dialogRef: MatDialogRef<DialogPokemonTypesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PokemonType[]
  ) {}

  onConfirm() {
    this.dialogRef.close(this.pokemonTypes);
  }

  onCancel() {
    this.dialogRef.close();
  }
}