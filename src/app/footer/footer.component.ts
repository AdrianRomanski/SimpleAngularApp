import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  lastAccessed = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addBook(): void {
    const book = new Book();
    book.title = 'another book';
    book.author = 'matt';
    this.dataService.addBook(book);
  }

  addBook2(): void {
    const book = new Book();
    book.title = 'another book';
    book.author = 'james';
    this.dataService.addBook(book);
  }

}
