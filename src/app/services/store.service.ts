import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import {Book} from "../class/book";

@Injectable()
export class StoreService {

  public books: Book[] = null;
  public instance: any;
  constructor () {
    localForage.config({
      driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
      name        : 'BookLib',
      version     : 1.0,
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
      description : 'some description'
    });
    this.instance = localForage.createInstance({});
  }
  public getBooks(): Promise<Book[]> {
    if (this.books) {
      return Promise.resolve(this.books);
    } else {
      return this.instance.getItem('books').then((res) => {
        return res;
      });
    }
  }

  public setBooks(_books: Book[]): void {
    this.books = _books;
    return this.instance.setItem('books', _books).then(res => {})
  }
  public clearBooks(): Promise<Boolean> {
    this.instance.removeItem('books');
    return Promise.resolve(true);

  }
  public addBook(_book: Book): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.books.push(_book);
      resolve(true);
    });
  };

  public editBook(_book: Book,_bookOld: Book): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      let arr = this.books.filter(book => book != _bookOld);
      arr.push(_book);
      this.books = arr;
      resolve(true);
    });
  };


}
