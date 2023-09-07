import express from 'express';
import userController from '../controllers/user.controller.js'
import { createUserSchema } from '../schema/user.schema.js';
import { validator } from '../middlewares/validator.js';

const router = express.Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = userController

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', validator(createUserSchema) ,createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router