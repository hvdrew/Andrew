import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
// import * as mongoose from 'mongoose'

const app = express()

app.use(morgan('dev'))
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Merison.io' })
})

app.listen(3000, () => console.log('Listening on port 3000.'))
