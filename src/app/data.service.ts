import { Injectable, EventEmitter } from '@angular/core';
import {Book} from './model/Book';
import {Subject} from 'rxjs';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Array<Book>;
  bookAddedEvent = new EventEmitter<Book>();
  bookDeletedEvent = new EventEmitter<Book>();

  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book();
    book1.title = 'first book';
    book1.author = 'matt';
    book1.price = 3.99;
    this.books.push(book1);

    const book2 = new Book();
    book2.title = 'second book';
    book2.author = 'adrian';
    book2.price = 2.99;
    this.books.push(book2);

    const book3 = new Book();
    book3.title = 'third book';
    book3.author = 'filip';
    book3.price = 6.99;
    this.books.push(book3);
  }

  addBook(book: Book): void {
    if (book.author === 'james') {
      this.bookAddedEvent.error('Books by james are not allowed');
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  deleteBook(): void {
    if (this.books.length !== 0) {
      this.bookDeletedEvent.emit(this.books.pop());
    } else {
      this.bookDeletedEvent.error('there is no more books');
    }
  }
}
