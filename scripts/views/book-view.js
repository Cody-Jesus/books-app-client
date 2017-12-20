'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml()))
  }

  bookView.initNewBook = function() {
    // console.log()
    $('.container').hide()
    $('#one').show()
  }

  bookView.initDetailsPage = function (err) {
    $('.container').hide()
    $('.book-details').show()
    module.Book.all[0].map(book => $('#book-detail').append(book.toHtml()))
  }

  // bookView.initNewBook = function (err) {
  //   $('.container').hide()
  //   $('.book-view').show()
  //   module.Book.all.map(book => $('#book-list').append(book.toHtml()))
  // }

  module.bookView = bookView
})(app)




function initTwo(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#two').show()
}

function initThree(ctx) {
  console.log('ctx', ctx)
  $('.container').hide()
  $('#three').show()
}


$(() => app.Book.fetchAll(app.bookView.initIndexPage))

