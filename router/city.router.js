import express from 'express';
import cityController from '../controllers/city.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

const { getCities, getCityById, createCity, updateCity, deleteCity } = cityController

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, createCity);

router.delete('/:id',
    isAdmin,
    deleteCity
);

router.put('/:id',
    isAdmin,
    updateCity
);

export default router;