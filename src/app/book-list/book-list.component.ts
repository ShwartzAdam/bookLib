import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../class/book";
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  // array with books for template
  public arrBooks: Book[] = new Array();
  public editBook: Book;
  public deleteBook: Book;

  constructor(private bookService: BookService,
              private storeService: StoreService) { }

  ngOnInit() {
    // on component init - fetch with book service all books to array of Books
    this.bookService.getAllBooksGoogleAPI().then(
      res => {
          // store array of 10 books
          let bookArr = res['items'];
          // loop on the arr and fetch needed data
          bookArr.forEach(bk => {
              let _bk: Book = new Book;
              _bk.id = bk['id'];
              _bk.bookTitle = bk['volumeInfo']['title'];
              _bk.authorName = bk['volumeInfo']['authors'][0];
              _bk.publishedDate = bk['volumeInfo']['publishedDate'];
              this.arrBooks.push(_bk);
          });
          // set Storage with books
          this.storeService.setBooks(this.arrBooks);
      }
    ).catch(rej => {});
  }

  onNotifyClicked(message: string): void {
    this.updateView();
  }
  onObject(_book: Book){
    // update modal with the Book
    this.editBook = _book;
    this.deleteBook = _book;
  }

  updateView(){
    this.storeService.getBooks().then(res => {
      this.arrBooks = new Array();
      this.arrBooks = res;
    });

  }

}
