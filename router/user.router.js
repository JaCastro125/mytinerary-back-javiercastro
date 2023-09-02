import express from 'express';
import userController from '../controllers/user.controller.js'

const router = express.Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser } = userController

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router