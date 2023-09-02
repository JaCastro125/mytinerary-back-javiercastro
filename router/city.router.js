import express from 'express';
import cityController from '../controllers/city.controller.js'

const router = express.Router();

const { getCities, getCityById, createCity, updateCity, deleteCity } = cityController

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', createCity);

router.delete('/:id', deleteCity);

router.put('/:id', updateCity);

export default router;