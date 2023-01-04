import express from 'express';
import * as lastcontroller from "../controllers/lastcontroller.js";
const router = express.Router();
router.route('/').post(lastcontroller.pickLast).get(lastcontroller.pickLast);
export default router;
