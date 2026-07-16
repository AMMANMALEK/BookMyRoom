import express from 'express'
import { protect } from '../middleware/authMiddleware.js';
import { registerHotel, getAvailableCities } from '../controllers/hotelController.js';

const hotelRouter = express.Router();

hotelRouter.post('/', protect, registerHotel);
hotelRouter.get('/cities', getAvailableCities);

export default hotelRouter;