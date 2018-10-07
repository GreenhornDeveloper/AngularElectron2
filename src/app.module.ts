import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatButtonModule, MatToolbarModule} from '@angular/material';

import  {DbService } from './app.service';

@NgModule({
    declarations: [AppComponent],
    imports: [FormsModule, BrowserModule, BrowserAnimationsModule, MatListModule, MatButtonModule, MatToolbarModule],
    bootstrap: [AppComponent],
    providers: [DbService]
})

export class AppModule { }
 