import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DataService, DataServiceInterface} from '../data.service';
import {Book} from '../model/Book';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  pageName = 'Page 1';
  books: Array<Book>;
  numberOfBookWrittenByMatt: number;
  subscriptionBookAdded: Subscription;
  subscriptionBookDeleted: Subscription;

  constructor(@Inject('DataServiceInterface') private dataService: DataServiceInterface) { }

  ngOnInit(): void {
    setTimeout(() => { this.pageName = 'First Page'; }, 5000);
    this.books = this.dataService.books;
    this.numberOfBookWrittenByMatt = this.books.filter(it => it.author === 'matt').length;

    this.subscriptionBookAdded = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if (newBook.author === 'matt') {
          this.numberOfBookWrittenByMatt++;
        }
      },
      (error) => {
        console.log('an error occured', error);
      },
      () => {
        // complete event
      }
    );

    this.subscriptionBookDeleted = this.dataService.bookDeletedEvent.subscribe(
      (deletedBook) => {
        if (deletedBook.author === 'matt') {
          this.numberOfBookWrittenByMatt--;
        }
      },
      (error) => {
        console.log('an error occured', error);
      }
    );
  }

  onButtonClick(): void {
    alert('hello - the date today is ' + new Date());
  }

  ngOnDestroy(): void {
    this.subscriptionBookAdded.unsubscribe();
    this.subscriptionBookDeleted.unsubscribe();
  }
}
