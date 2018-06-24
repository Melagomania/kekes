import { Component, OnInit } from '@angular/core';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchQuery  = '';


  constructor(private bookListService: BookListService) {

  }

  sendRequest(e) {
    e.preventDefault();
    this.bookListService.sendRequest(this.searchQuery);
  }

  ngOnInit() {
  }

}
