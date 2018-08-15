import {Component, EventEmitter, Output} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from "@angular/forms";
import {Book} from "../../class/book";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  model: Book = new Book;
  formGroup: FormGroup;
  id: AbstractControl;
  authorName: AbstractControl;
  publishedDate: AbstractControl;
  bookTitle: AbstractControl;

  errorMessage: string = "Please insert a title for the book";

  constructor(public ngxSmartModalService: NgxSmartModalService,
              public formBuilder: FormBuilder,
              public storeService: StoreService){
    this.formGroup = this.formBuilder.group({
      id:               [this.model.id, Validators.required],
      authorName:       [this.model.authorName, Validators.required],
      publishedDate:    [this.model.publishedDate, Validators.required],
      bookTitle:        [this.model.bookTitle, [Validators.required], this.validationTitle.bind(this)]
    });
  }

  action(s){
    if(s === 'Ok'){
      if (this.formGroup.valid) {
        // added it to store service
        let _book: Book = new Book;
        _book.id = this.model.id;
        _book.bookTitle = this.model.bookTitle;
        _book.publishedDate = this.model.publishedDate;
        _book.authorName = this.model.authorName;

        this.storeService.addBook(_book).then(
          () => {
            this.notify.emit('Added Successfully');
            this.resetForm();
          }
        ).catch(err => console.log(err))
      } else {
        Object.keys(this.formGroup.controls).forEach(field => {
          const control = this.formGroup.get(field);
          control.markAsTouched({ onlySelf: true });
        });
      }
    } else {
      this.resetForm();
    }

  }

  resetForm(){
    this.ngxSmartModalService.getModal('addBook').close();
    this.formGroup.reset();
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

  validationTitle(control: AbstractControl){
    return this.storeService.getBooks().then(
      res => {
        let titleBook = control.value;
        let isExist = res.filter( book => book.bookTitle == titleBook );
        if (isExist['length']) {
          this.errorMessage = 'Please choose a different title for the book';
          return {'bookTitleExist': true};
        } else {
          return null;
        }
      })
  }

}
