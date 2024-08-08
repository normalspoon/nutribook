const MealPlan = require('../../models/mealPlan');

module.exports = {
    create,
    index,
  };


  async function index(req, res) {
    try {
      const plans = await MealPlan.find({});
      res.json(plans);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async function create(req, res) {
    try {
      console.log('req.body:', req.body)
      const plan = await MealPlan.create(req.body);
      res.json(plan);
    } catch (err) {
      console.error('error creating plan', err)
      res.status(400).json(err);
    }
  }

