const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const mealSchema = new Schema({
    description: {type: Stringm, required: true},

    

})


const mealPlanSchema = new Schema({
    name: {type: String, required: true},
    breakfast: {mealSchema},
    lunch: {mealSchema},
    dinner: {mealSchema},
    snack: {mealSchema},
}, {
    timestampes: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});


module.exports = mongoose.model('MealPlan', mealPlanSchema);
