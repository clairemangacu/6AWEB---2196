import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  private base = 'http://localhost:5038/api/books';
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(`${this.base}/GetBooks`);
  }

  addBook(book: any) {
    const fd = new FormData();
    fd.append('title', book.title);
    fd.append('author', book.author);
    fd.append('year', book.year);
    fd.append('genre', book.genre);
    fd.append('desc', book.desc);
    fd.append('publisher', book.publisher);
    fd.append('pages', book.pages);
    return this.http.post(`${this.base}/AddBook`, fd);
  }

  updateBook(id: string, book: any) {
    const fd = new FormData();
    fd.append('title', book.title);
    fd.append('author', book.author);
    fd.append('year', book.year);
    fd.append('genre', book.genre);
    fd.append('desc', book.desc);
    fd.append('publisher', book.publisher);
    fd.append('pages', book.pages);
    return this.http.put(`${this.base}/UpdateBook?id=${id}`, fd);
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.base}/DeleteBook`, { params: { id } });
  }
}
