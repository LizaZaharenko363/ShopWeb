import {Router} from 'express'
import { getOrders, addNewOrder, deleteOrder, updateOrderById, clearCart } from '../contollers/orders.controller';   

const router = Router();

router.get('/orders',getOrders)
router.post('/orders',addNewOrder)
router.delete('/orders/:id',deleteOrder)
router.put('/orders/:id',updateOrderById)
router.delete('/orders',clearCart)

export default router