import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    AddDialogComponent,
    // Pipes
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
