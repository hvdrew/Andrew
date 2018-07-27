import * as validator from 'validator';

const validateEmail = (email: string) => {
    return validator.isEmail(email);
};

export { validateEmail }