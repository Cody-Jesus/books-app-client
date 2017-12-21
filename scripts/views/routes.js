'use strict'

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage))
page('/', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initDetailPage))
page('/newbook',app.bookView.initNewBook)
// page('/')
page('/two', initTwo)
page('/three/:letter', initThree)
// page('/books/:id', showSomeDetail)

page()