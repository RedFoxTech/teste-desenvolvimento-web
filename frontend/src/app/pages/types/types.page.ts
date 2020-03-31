import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { PokemonType } from "@models/pokemonType.model";
import { PokemonTypeService } from "@services/pokemonType.service";

import { DialogRemoveGeneric } from "@components/dialog-remove-generic/dialog-remove-generic.component";
import { DialogAddGeneric } from "@components/dialog-add-generic/dialog-add-generic.component";

@Component({
  selector: "types-page",
  templateUrl: "./types.page.html",
  styleUrls: ["./types.page.css"]
})
export class TypesPage implements OnInit {
  pageLoading: boolean = false;
  typeList: PokemonType[];

  constructor(
    private pokemonTypeService: PokemonTypeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pokemonTypeService.getPokemonTypes()
      .subscribe(types => this.typeList = types)
  }

  updatePokemonTypes() {
    this.pokemonTypeService.getPokemonTypes()
    .subscribe(types => {
      this.typeList = types;
      this.pageLoading = false;
    })
  }

  onOpenRemoveDialog(type: PokemonType) {
    const ref = this.dialog.open(DialogRemoveGeneric, {
      width: "250px",
      data: { name: type.name, strongDescription: `(${type.id}) - ${type.name}`}
    });

    ref.afterClosed()
      .subscribe(result => {
        if (result) {
          this.pageLoading = true;
          this.pokemonTypeService.deletePokemonType(type.id)
            .subscribe(() => {
              this.updatePokemonTypes();
            });
        }
      });
  }

  onOpenAddDialog() {
    const ref = this.dialog.open(DialogAddGeneric, {
      width: "250px",
      data: {
        title: "New type",
        description: "Add new pokemon type",
        label: "Type name",
        placeholder: "Ex: Psychic"
      }
    });

    ref.afterClosed()
      .subscribe(name => {
        if (name) {
          this.pageLoading = true;
          this.pokemonTypeService.createPokemonType({ name })
            .subscribe(() => {
              this.updatePokemonTypes();
            });
        }
      });
  }

  onOpenEditDialog(type: PokemonType) {
    const ref = this.dialog.open(DialogAddGeneric, {
      width: "250px",
      data: {
        title: `Edit type ${type.name}`,
        description: `Edit type ${type.name} name`,
        label: "Type name",
        placeholder: "Ex: Psychic",
        value: type.name
      }
    });

    ref.afterClosed()
      .subscribe(name => {
        if (name) {
          this.pageLoading = true;
          this.pokemonTypeService.updatePokemonType(type.id, {name})
            .subscribe(() => {
              this.updatePokemonTypes();
            });
        }
      });
  }
}