import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js'

const router = express.Router();

const {getItineraries, createItinerary, getItineraryById, deleteItinerary, updateItinerary} = itineraryController;

router.get('/', getItineraries)

router.get('/:id', getItineraryById)

router.post('/', createItinerary)

router.delete('/:id', deleteItinerary);

router.put('/:id', updateItinerary);

export default router;