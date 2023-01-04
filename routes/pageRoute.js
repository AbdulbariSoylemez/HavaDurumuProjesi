 import express from 'express'
 import * as pagecontroller from "../controllers/pagecontroller.js"
 const router = express.Router()

 router.route('/').get(pagecontroller.getHomePage)
 router.route('/about').get(pagecontroller.getAboutPage)
 router.route('/communication').get(pagecontroller.getCommunicationPage)
 export default router