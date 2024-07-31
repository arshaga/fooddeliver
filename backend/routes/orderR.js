import express  from 'express'
import { placeOrder } from '../controllers/order.js';
import authMiddleware from '../middleware/authentification.js';


const router = express.Router()
router.post("/place",authMiddleware,placeOrder);

export default router;