import { Router } from 'express';
const authMiddleware = require('../middlewares/auth-middleware');
const filmController =require('../controllers/film-controllers') ;
const userController = require('../controllers/user-controller');
const { body } = require('express-validator');
const api = Router();
api.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}),
  userController.registration);

api.get('/activate/:link',userController.activate);
api.post('/login', userController.login);
api.post('/logout', userController.logout);
api.get('/users', authMiddleware, userController.getUsers);
api.get('/refresh', userController.refresh);
api.get('/films',filmController.getFilms);
api.post('/films',filmController.addFilm);
api.get('/films/:id',filmController.getFilmById);
api.put('/films/:id',filmController.updateFilm)
// api.patch
api.delete('/films/:id',filmController.deleteFilm)




export default api;
