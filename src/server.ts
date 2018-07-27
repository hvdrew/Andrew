import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { envSettings } from './lib/config';
import { mainRouter } from './controllers/main.controller';
import { submissionRouter } from './controllers/submission.controller';

const app = express();

// General setup for express and middleware
app.use(morgan(envSettings.morganPreset));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use('/public', express.static('public'));

// Router for frontent pages
app.use('/', mainRouter);

// Router for form submissions
app.use('/form', submissionRouter);

export { app }

// TODO: Setup error handling and 404 page for non-existant paths