import express from 'express';
import userController from '../controllers/user.controller.js'

const router = express.Router();

const {getUsers, createUser} = userController;

router.get('/', getUsers)

router.post('/', createUser);

export default router;