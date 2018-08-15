import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../class/book";
import {NgxSmartModalService} from "ngx-smart-modal";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{
  @Input() book: Book;
  @Output() bookObj: EventEmitter<Book> = new EventEmitter<Book>();
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  editBook(){
    // emit event to change Book object
    this.bookObj.emit(this.book);
    // open modal
    this.ngxSmartModalService.getModal('editModal').open();
  }

  deleteBook(){
    // emit event to change Book object
    this.bookObj.emit(this.book);
    // open modal
    this.ngxSmartModalService.getModal('removeModal').open();
  }

}
