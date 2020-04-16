const express = require('express')
const router = express.Router()

const Book = require('../models/book-model')

router.get('/lista', (req, res, next) => {

    Book.find()
        .then(allBooks => res.render('books/books-list', { allBooks }))
        .catch(err => console.log("Ha habido un error!", err))
})

router.get('/detalles/:bookId', (req, res, next) => {

    Book.findById(req.params.bookId)
        .then(theBook => res.render('books/book-detail', theBook))
        .catch(err => console.log("Ha habido un error!", err))
})

module.exports = router