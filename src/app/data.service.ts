import { Injectable } from '@angular/core';
import {Book} from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Array<Book>;

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
}
