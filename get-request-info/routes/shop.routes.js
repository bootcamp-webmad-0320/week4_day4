const express = require('express')
const router = express.Router()

// Shop index page
router.get('/', (req, res, next) => {
    res.render('shop-page')
})

// URL params
router.get('/ropa/:season/:clothe', (req, res, next) => {

    console.log('---------------------------------')
    console.log('Los URL params de esta URL son:', req.params)
    console.log('El valor para el param "season" es', req.params.season)
    console.log('El valor para el param "clothe" es', req.params.clothe)
    console.log('---------------------------------')


    // Envío de los Route Params a una vista
    res.render('details-page', req.params)
})

// Query strings form results
router.get('/buscar', (req, res, next) => {
    res.render('results-page', req.query)
})

module.exports = router