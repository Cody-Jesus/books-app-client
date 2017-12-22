'use strict'

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage))
page('/newbook',app.bookView.initNewBook)
// page('/newbook',console.log('inside router'))

page()