const express = require('express');

const router = express.Router();

const candyControllers = require('../controllers/candy');


//        USER DASHBOARD
router.get('/', candyControllers.getDashboard);

//        INSERT DATA INTO THE DATABASE
router.post('/create', candyControllers.postData);

//        GET ALL DATA FROM DATABASE
router.get('/data', candyControllers.getData);

//        DELETE THE DATA FROM DATABASE
router.get('/delete-data', candyControllers.deleteData);

//       BUY1 ROUTES
router.get('/buy1-data', candyControllers.buy1data);

//       BUY2 ROUTES
router.get('/buy2-data', candyControllers.buy2data);   

//       BUY3 ROUTES
router.get('/buy3-data', candyControllers.buy3data);

module.exports = router;