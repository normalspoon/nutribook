
const express = require('express');
const router = express.Router();
const mealPlansCtrl = require('../../controllers/api/plans');
// const MealPlan = require('../../models/mealPlan');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/mealPlans
router.get('/', mealPlansCtrl.index);
// POST /api/mealPlans
router.post('/', mealPlansCtrl.create);


module.exports = router;
