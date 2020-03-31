import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: any) { }

  attributes = Object.keys(this.pokemon)
  currentValues = Object.values(this.pokemon)
  tableData = []

  ngOnInit(): void {
    for (let key in this.pokemon) {
      this.tableData.push({attribute: key, currentValue: this.pokemon[key], newValue: this.pokemon[key]})
    }
  }

  updateNewValue(index, value) {
    this.tableData[index].newValue = value
  }

  close() {
    this.dialogRef.close()
  }
}
