import express from 'express';
import * as newscontroller from '../controllers/newscontroller.js'

const router = express.Router()

router.route('/').get(newscontroller.getAllNews)
export default router