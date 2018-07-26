import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
// import * as mongoose from 'mongoose';

// TODO: Add types to this file

const app = express();

app.use(morgan('dev'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Merison.io' });
});

export { app }