import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js'
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

const { getItineraries, createItinerary, getItineraryById, deleteItinerary, updateItinerary } = itineraryController;

router.get('/', getItineraries)

router.get('/:id', getItineraryById)

router.post('/', createItinerary)

router.delete('/:id',
    isAdmin,
    deleteItinerary
);

router.put('/:id',
    isAdmin,
    updateItinerary
);

export default router;