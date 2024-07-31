import express from 'express'
import{ addFood, listFood, removeFood } from "../controllers/food.js"
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})
router.post('/add',upload.single('image'),addFood)
router.get('/list',listFood)
router.delete('/remove',removeFood)

export default router;