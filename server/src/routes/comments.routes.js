import {Router} from 'express'
import { createNewComment, deleteCommentById, getComments } from '../contollers/comments.controller';   

const router = Router();

router.get('/comments/:id',getComments)
router.post('/comments',createNewComment)
router.delete('/comments/:id',deleteCommentById)

export default router