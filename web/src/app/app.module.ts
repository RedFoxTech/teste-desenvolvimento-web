import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTableComponent,
    EditModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [
    EditModalComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
