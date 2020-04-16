const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => res.render('index'))

// Renderizado de formulario
router.get('/login', (req, res, next) => res.render('login-form'))

// Procesamiento de datos
router.post('/login', (req, res, next) => {

    // const username = req.body.username
    // const pwd = req.body.pwd
    const { username, pwd } = req.body

    res.send(`usuario: ${username}, Password: ${pwd}`);
})

module.exports = router
