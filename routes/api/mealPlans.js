
const express = require('express');
const router = express.Router();
const mealPlansCtrl = require('../../controllers/api/plans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/mealPlans
router.get('/', ensureLoggedIn, mealPlansCtrl.index);
// POST /api/mealPlans
router.post('/', ensureLoggedIn, mealPlansCtrl.create);
// PUT /api/mealPlans/:id
router.put('/:id', ensureLoggedIn, mealPlansCtrl.update);
// DELETE /api/mealPlans/:id
router.delete('/:id', ensureLoggedIn, mealPlansCtrl.delete);


module.exports = router;
