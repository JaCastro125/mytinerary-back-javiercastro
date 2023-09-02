import express from 'express';
import userRouter from './user.router.js';
import cityRouter from './city.router.js';
import itineraryRouter from './itinerary.router.js'
import activityRouter from './activity.router.js'

const router = express.Router();

router.use('/users', userRouter);

router.use('/cities', cityRouter);

router.use('/itineraries', itineraryRouter);

router.use('/activities', activityRouter);

export default router;