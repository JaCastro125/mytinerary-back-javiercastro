import express from 'express';
import userRouter from './user.router.js';
import citiesRouter from './cities.router.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo')
});

router.use('/users', userRouter);
router.use('/cities', citiesRouter)

export default router;