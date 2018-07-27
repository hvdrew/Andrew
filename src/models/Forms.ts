import { Schema, model } from 'mongoose';

const contactFormSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	message: {
		type: String,
		max: 1000,
		required: true
	},
	datesubmitted: {
		type: Date,
		default: Date.now()
	}
});

// const validateInput = () => {
// 	// Method for server-side validation
// 	return;
// };

// formSchema.methods.validateInput = validateInput;

const ContactFormModel = model('ContactForm', contactFormSchema);

export { ContactFormModel }