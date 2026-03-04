import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  books: any[] = [];
  newBook = { title: '', author: '', year: 0, genre: '', desc: '', publisher: '', pages: 0 };
  editingBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit() { this.loadBooks(); }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.newBook = { title: '', author: '', year: 0, genre: '', desc: '', publisher: '', pages: 0 };
    });
  }

  editBook(book: any) {
    this.editingBook = { ...book };
  }

  updateBook() {
    this.bookService.updateBook(this.editingBook.id, this.editingBook).subscribe(() => {
      this.loadBooks();
      this.editingBook = null;
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }
}
