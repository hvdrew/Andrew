import * as mongoose from 'mongoose';
import { ContactFormModel } from '../models/Forms';
import { envSettings } from './config';
import { log } from './console-logger';

const dbUrl = envSettings.dburl;

class DataBaseHandler {
	public dbUrl: string;
	public db: mongoose.Connection;

	constructor(dbUrl: string) {
		this.dbUrl = dbUrl;
	}

	connect() {
		mongoose.connect(this.dbUrl, { useNewUrlParser: true });
		this.db = mongoose.connection;

		this.db.on('error', (err) => {
			console.log(log.error(`${err.name}: ${err.message}`));
		});
		this.db.on('open', () => {
			console.log(log.success('Connected to MongoDB successfully.'));
		});
	}

	saveFormSubmission(data) {
		let submission = new ContactFormModel(data);
		submission.save((err) => {
			if (err) {
				return console.log(log.error(err));
			}
			console.log(log.good('Saved form submission successfully.'));
		});
	}
}

const DB = new DataBaseHandler(dbUrl);

export { DB }