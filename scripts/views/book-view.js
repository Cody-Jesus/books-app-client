'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide()
    $('#book-list').empty()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')))
  }

  bookView.initNewBook = function() {
    $('.container').hide()
    $('#one').show()
    $('#new-form').on('change', 'input, textarea', bookView.create);
    $('#new-form').on('submit', bookView.submit);
  }

  bookView.initDetailPage = function (err) {
    $('.container').hide()
    $('#detail-desc').empty()
    $('.detail-view').show()
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')))

  }

  bookView.create = function () {
    var book;
    $('#book-list').empty()
    book = new Book({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      imageUrl: $('#article-author-url').val(),
      isbn: $('#article-category').val(),
      description: $('#article-body').val(),
    });

    $('#book-list').append(book.toHtml('book-list-template'));
    // $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  bookView.submit = event => {
    event.preventDefault();
    let book = new Book({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      imageUrl: $('#article-author-url').val(),
      isbn: $('#article-category').val(),
      description: $('#article-body').val(),
    });
   console.log('book', book);
    // article.insertRecord();
   
    // REVIEW: The following line of code redirects the user back to the home page after submitting the form.
    window.location = '../';
  }





  module.bookView = bookView
})(app)

