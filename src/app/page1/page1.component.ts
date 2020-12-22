import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(() => { this.pageName = 'First Page'; }, 5000);
  }

  onButtonClick(): void {
    alert('hello - the date today is ' + new Date());
  }

}
