import { Component } from '@angular/core';
import { DbService } from './app.service';

import {remote} from 'electron';
const path = require('path')

@Component({
  selector: 'App',
  templateUrl: './app.component.html'
})

export class AppComponent {

  private theDbRoot = remote.app.getPath('userData');
  private dbPath = path.resolve(this.theDbRoot, './db.sqlite3');

  public name: string = "Electron";
  results : Promise<any[]>;
  
  constructor(private dbService: DbService) {}

  readDb() {
    this.results = this.dbService.readDb(this.dbPath);
  };
}