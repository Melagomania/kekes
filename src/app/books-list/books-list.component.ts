import { Component, OnInit } from '@angular/core';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  bookList;

  constructor(private bookListService: BookListService ) {
    this.bookList = bookListService;
  }
  ngOnInit() {
  }

}
