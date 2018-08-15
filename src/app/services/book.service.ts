import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {

  public url = 'https://www.googleapis.com/books/v1/volumes?q=war';
  public headerConfig: any;

  constructor(private http: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    this.headerConfig = headers;
  }

  public getAllBooksGoogleAPI() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url , {
        headers: this.headerConfig,
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
