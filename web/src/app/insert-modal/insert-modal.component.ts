import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.css']
})
export class InsertModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InsertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: any) { }

  returnValue = {}

  ngOnInit(): void {
  }

  updateReturnValue(key, value) {
    if(key === 'name') {
      this.returnValue[key] = this.titleCase(value)
      return
    }
    this.returnValue[key] = value
  }

  close() {
    this.dialogRef.close()
  }

  titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
}
