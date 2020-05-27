import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// Models
import { Pokemon } from '../../../models/Pokemon.model';

@Component({
    selector: 'app-add-dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnChanges {
    @Input() pokemon;
    @Input() dataList: any[];
    @Output() save: EventEmitter<any> = new EventEmitter();
    isOpen = false;
    pokeForm: FormGroup = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(''),
        atk: new FormControl(null),
        def: new FormControl(null),
        sta: new FormControl(null)
    })
    openModal() {
        this.isOpen = true;
    }
    closeModal() {
        this.isOpen = false;
    }
    onClose() {
        this.closeModal();
    }
    onSaveData() {
        this.save.emit(this.pokeForm.value);
    }
    ngOnChanges() {
        this.pokeForm.setValue({
            id: this.pokemon.id ? this.pokemon.id : null,
            name: this.pokemon.name,
            atk: this.pokemon.atk,
            def: this.pokemon.def,
            sta: this.pokemon.sta
        })
    }
    getThumb() {
        return `https://img.pokemondb.net/sprites/go/normal/${this.pokemon.name.toLowerCase()}.png`;
      }
}