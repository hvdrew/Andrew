import { Router } from 'express';
const mainRouter: Router = Router();

/* ROUTES */
mainRouter.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

mainRouter.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});
/* END OF ROUTES */

export { mainRouter }

// TODO: Setup error handling and 404 page for non-existant paths