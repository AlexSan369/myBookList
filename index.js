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
    static displayBooks() {
       const books = Store.getBooks();
       books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className, fontSize, alignText) {
        const div = document.createElement('div');
        div.className = `alert alert-${className} ${fontSize} text-${alignText}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Apaga o alerta em depois de 3s
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}