import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() removeBook = null;
  constructor(public ngxSmartModalService: NgxSmartModalService,
              private storeService: StoreService) { }

  action(s){
    if(s === 'Ok') {
      this.storeService.getBooks().then(
        res => {
          // remove book id from array and set new books array for storage
          const store = res.filter(book => book.id != this.removeBook.id );
          this.storeService.clearBooks().then(
            res => {
              // console.log(res);
              this.storeService.setBooks(store);
              this.notify.emit('Deleted Successfully')
            });
        });
    }
    this.ngxSmartModalService.getModal('removeModal').close();

  }
}
