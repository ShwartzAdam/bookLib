import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// modules
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import {NgxSmartModalModule} from "ngx-smart-modal";
// pipes
import { RemoveNoneEngPipe } from "./pipes/remove-none-eng";
// components

import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { BookListComponent } from "./book-list/book-list.component";
import { BookComponent } from "./book/book.component";
import { AddBookComponent } from './modals/add-book/add-book.component';
import { RemoveBookComponent } from './modals/remove-book/remove-book.component';
import { EditBookComponent } from './modals/edit-book/edit-book.component';
// services
import { BookService } from "./services/book.service";
import {StoreService} from "./services/store.service";


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    RemoveNoneEngPipe,
    AddBookComponent,
    RemoveBookComponent,
    EditBookComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [BookService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
