import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book;
  @Input() btnClick;
  @Input() btnMessage;

  constructor() { }

  ngOnInit() {
  }

}
