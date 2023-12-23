import {Router} from 'express'
import { createNewProduct, getProducts, getProductById, deleteProductById } from '../contollers/products.controller';   

const router = Router();

router.get('/products',getProducts)
router.post('/products', createNewProduct)
router.get('/products/:id',getProductById)
router.delete('/products/:id',deleteProductById)


export default router