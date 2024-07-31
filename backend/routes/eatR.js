import express  from 'express'
import { loginUser, registerUser } from '../controllers/user.js'

const router = express.Router()
router.post('/login',loginUser)

router.post('/reg',registerUser)

export default router;