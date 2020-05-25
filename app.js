// book class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI class: handle ui tasks
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "Book one",
        author: "Author one",
        isbn: "KSH1d23123zzHZ",
      },
      {
        title: "Book two",
        author: "Author two",
        isbn: "KSH1d23123zzHZ",
      },
    ];
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
    list.appendChild(row);
  }
}

// store class: handles storage

// EVENT: add a book
// EVENT: display a book
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// EVENT: remove a book
