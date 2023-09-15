// Construtors => livro
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn =isbn;
    }
}

// Classe UI: lida com as tarefas da UI
class UI {
    static displayBooks () {
       const books = Store.getBooks();
       books.forEach((book) => UI.addBookToList(book));
    }
}