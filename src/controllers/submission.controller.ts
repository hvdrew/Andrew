import { Router } from 'express';
import { DB } from '../lib/db-util';
import { log } from '../lib/console-logger';
const submissionRouter: Router = Router();

/* ROUTES */
submissionRouter.post('/submit', (req, res) => {
	console.log(log.info('Submission received, attempting to save to DB.'));
	console.log(log.success(req.body));

	// Check that our model's requirements are met
	if (req.body.firstname && req.body.lastname && req.body.email && req.body.message) {
		
		// Check if the honeypot caught a bot
		if (req.body.bot === false) {
			// Attempt to save the submission data
			DB.saveFormSubmission({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.email,
				message: req.body.message
			});
		} else {
			console.log(log.silly('BOT SUBMISSION BLOCKED'));
		}

		// Return a success code if all goes well
		res.set('Content-Type', 'text/html');
		return res.status(200).send('Submission successful.');
	
	} else {
		// Model requirements are not met, respond with error code
		res.set('Content-Type', 'text/html');
		return res.status(422).send('Error: Invalid submission');
	}
});
/* END OF ROUTES */

export { submissionRouter }

// TODO: Setup error handling and 404 page for non-existant paths