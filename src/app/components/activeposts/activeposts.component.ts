import { Component, OnInit } from '@angular/core';
import * as objectData from 'src/assets/db.json';

@Component({
  selector: 'app-activeposts',
  templateUrl: './activeposts.component.html',
  styleUrls: ['./activeposts.component.scss'],
})
export class ActivepostsComponent implements OnInit {
  title = 'json-read-example';
  data: any = objectData;
  constructor() {}

  ngOnInit() {
    console.log('Data', this.data);
  }
}
