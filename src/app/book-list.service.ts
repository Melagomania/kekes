import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookListService {
  allBooks = [];
  myBooks = [];

  constructor(private http: HttpClient) {

  }

  sendRequest(query) {
    this.allBooks = [];
    if (query) {
      const url = 'https://www.googleapis.com/books/v1/volumes?maxResults=15&q=' + query;
      this.http.get(url)
        .subscribe(data => {
          this.allBooks = data.items;
          console.log(this);
        });
    }
  }

  addToMyBooks(id) {
    for (let i = 0; i < this.myBooks.length; i++) {
      if (this.myBooks[i].id === id) {
        return;
      }
    }
    for (let j = 0; j < this.allBooks.length; j++) {
      if (this.allBooks[j].id === id) {
        this.myBooks.push(this.allBooks[j]);
        console.log(this);
        return;
      }
    }
  }

  removeFromMyBooks(id) {
    for (let i = 0; i < this.myBooks.length; i++) {
      if (this.myBooks[i].id === id) {
        this.myBooks.splice(i, 1);
      }
    }
  }
}
