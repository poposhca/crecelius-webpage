import express from 'express'
import path from 'path'
import fs from 'fs'
import config from './config'

const app = express()

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/', (req,res) => {
    console.log(req.headers["accept-language"] )
    fs.readFile('./views/index.html', (err, data) => {
        if(err && err !== null)
            res.send('Error getting the page\n' + err.message)
        else
            res.send(data.toString())
    })
})

app.listen(config.PORT, () => {
    console.log('Up & listening on port ' + config.PORT)
})