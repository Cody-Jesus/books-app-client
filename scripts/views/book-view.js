'use strict'

var app = app || {};

(function (module) {
  const bookView = {}

  bookView.initIndexPage = function (err) {
    $('.container').hide()
    $('.book-view').show()
    module.Book.all.map(book => $('#book-list').append(book.toHtml('book-list-template')))
  }

  bookView.initNewBook = function() {
    // console.log()
    $('.container').hide()
    $('#one').show()
  }

  bookView.initDetailPage = function (err) {
    $('.container').hide()
    $('#detail-desc').empty()
    $('.detail-view').show()
    module.Book.all.map(book => $('#detail-desc').append(book.toHtml('book-detail-template')))

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

