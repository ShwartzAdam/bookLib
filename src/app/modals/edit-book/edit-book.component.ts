import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../class/book";
import {ValidationService} from "../../validators/validation.service";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnChanges{
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() editBook = null;
  model: Book = new Book;
  modelSubmit: Book = new Book;
  formGroup: FormGroup;
  id: AbstractControl;
  authorName: AbstractControl;
  publishedDate: AbstractControl;
  bookTitle: AbstractControl;
  errorMessage: string = "Please insert a title for the book";

  constructor(public ngxSmartModalService: NgxSmartModalService,
              public formBuilder: FormBuilder,
              public storeService: StoreService) {
    this.formGroup = this.formBuilder.group({
      id:               [this.model.id, Validators.required],
      authorName:       [this.model.authorName, Validators.required],
      publishedDate:    [this.model.publishedDate, [Validators.required ,ValidationService.dateValidator]],
      bookTitle:        [this.model.bookTitle, [Validators.required], this.validationTitle.bind(this)]
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.editBook.firstChange) {
      return;
    } else {
        this.modelSubmit = changes.editBook.currentValue;
        // keep value aside
        this.model = new Book;
        this.model.id = this.modelSubmit.id;
        this.model.authorName = this.modelSubmit.authorName;
        this.model.publishedDate = this.modelSubmit.publishedDate;
        this.model.bookTitle = this.modelSubmit.bookTitle;
    }
  }

  action(s){
    if(s === 'Ok'){
      if (this.formGroup.valid) {
        // added it to store service
        this.storeService.editBook(this.model,this.modelSubmit).then(
          () => {
            this.notify.emit('Edited Successfully');
            this.ngxSmartModalService.getModal('editModal').close();
          }
        ).catch(() => {})
      } else {
        Object.keys(this.formGroup.controls).forEach(field => {
          const control = this.formGroup.get(field);
          control.markAsTouched({ onlySelf: true });
        });
      }
    } else {
      this.ngxSmartModalService.getModal('editModal').close();
    }
  }

  isFieldValid(field: string) {
    return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validationTitle(control: AbstractControl) {
    return this.storeService.getBooks().then(
      res => {
        // if it is the same , dont check and exit
        if(this.editBook.bookTitle == control.value) {
          return null;
        } else {
          let isExist = res.filter(book => book.bookTitle == control.value);
          if (isExist['length']) {
            this.errorMessage = 'Please choose a different title for the book';
            return {'bookTitleExist': true};
          } else {
            return null;
          }
        }
      });
  }


}
