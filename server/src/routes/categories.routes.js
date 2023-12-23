import {Router} from 'express'
import { getCategories, getProductsByCategory, getCategoryById } from '../contollers/categories.controller';   

const router = Router();

router.get('/category',getCategories)
router.get('/category/:id/products',getProductsByCategory)
router.get('/category/:id',getCategoryById)

export default router