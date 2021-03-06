'use strict'

var app = app || {};

(function(module) {
  var __API_URL__ = 'https://cw-jw-booklist.herokuapp.com';
  // var __API_URL__ = 'http://localhost:3000';

  function errorCallback(err) {
    console.error(err)
    module.errorView.initErrorPage(err)
  }

  function Book(rawBookObj) {
    Object.keys(rawBookObj).map(key => this[key] = rawBookObj[key])
  }

  Book.prototype.toHtml = function(templateId) {
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(this);
  }

  Book.all = []
  Book.loadAll = rows => Book.all = rows.sort((a, b) => a.title - b.title).map(book => new Book(book))

  Book.fetchOne = (id, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${id}`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback)

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback)

  Book.prototype.insertRecord = function(callback) {
    // REVIEW: Why can't we use an arrow function here for .insertRecord()?
    console.log({author: this.author, image_url: this.image_url, description: this.description, isbn: this.isbn, title: this.title})
    $.post(`${__API_URL__}/api/v1/books`, {author: this.author, image_url: this.image_url, description: this.description, isbn: this.isbn, title: this.title})
      .then(console.log)
      .then(callback);
  };

  Book.prototype.remove = id => {
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${id}`,
      method: 'DELETE'
    })
      // .then(console.log)
      .then(() => page('/'))
      // .then(callback);
      .catch(errorCallback)
  };



  module.Book = Book
})(app)