import { Component } from '@angular/core';
// import { DbService } from './app.service';

// import {remote} from 'electron';
const path = require('path')

@Component({
  selector: 'App',
  template:
  `
  <div> 
    hello
  </div>
 `
})

export class AppComponent {

 // private dbPath = path.resolve(this.theDbRoot, './db.sqlite3');

  public name: string = "Electron";
  results : Promise<any[]>;
  
  constructor() {}

}