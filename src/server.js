import express from 'express'
import path from 'path'
import fs from 'fs'
import config from './config'

const app = express()

app.set('view engine', 'hbs')

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', (req,res) => {
    console.log(req.headers["accept-language"] )
    res.render('index', {landing:true})
})

app.get('/toys', (req,res) => {
    res.render('index', {'toys': true})
})

app.listen(config.PORT, () => {
    console.log('Up & listening on port ' + config.PORT)
})