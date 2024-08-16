const MealPlan = require('../../models/mealPlan');

module.exports = {
    create,
    index,
    update,
    delete: deletePlan,
  };


  async function index(req, res) {
    try {
      const plans = await MealPlan.find({user: req.user._id});
      res.json(plans);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async function create(req, res) {
    try {
      console.log('req.body:', req.body)
      const plan = await MealPlan.create({...req.body, user: req.user._id});
      res.json(plan);
    } catch (err) {
      console.error('error creating plan', err)
      res.status(400).json(err);
    }
  }

  async function update(req, res) {
    try {
      const updatedPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
      res.json(updatedPlan);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async function deletePlan(req, res) {
    try {
      await MealPlan.findByIdAndDelete(req.params.id);
      res.json({ message: 'Plan deleted' });
    } catch (err) {
      res.status(400).json(err);
    }
  }
