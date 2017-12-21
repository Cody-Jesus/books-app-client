'use strict'

var app = app || {};

(function(module) {
  var __API_URL__ = 'https://cw-jw-booklist.herokuapp.com';

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
    // console.log('inside insert: ', book)
    $.post(`${__API_URL__}`, {author: this.author, image_url: this.image_url, body: this.description, isbn: this.isbn, title: this.title})
      .then(console.log)
      .then(callback);
  };

  module.Book = Book
})(app)