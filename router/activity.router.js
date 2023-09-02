import express from 'express';
import userController from '../controllers/activity.controller.js'

const router = express.Router();

const {getActivities, getActivityById, createActivity, updateActivity, deleteActivity} = userController;

router.get('/', getActivities);

router.get('/:id', getActivityById);

router.post('/', createActivity);

router.delete('/:id', deleteActivity);

router.put('/:id', updateActivity);

export default router;