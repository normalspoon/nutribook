const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const mealSchema = new Schema({
    name: {type: String, required: true},
    amount: {type: Number},
    energy: { type: Number },
    protein: { type: Number},
    carbs: { type: Number},
    fat: {type: Number},
    sugars: {type: Number},
    fiber: {type: Number},
    iron: {type: Number},
    sodium: {type: Number},
    magnesium: {type: Number},
    niacin: {type: Number},
    vitaminA: {type: Number},
    vitaminD: {type: Number},
    vitaminC: {type: Number},
    vitaminK: {type: Number},
    vitaminB12: {type: Number},
    vitaminE: {type: Number},
    lycopene: {type: Number},
    luteinZeaxanthin: {type: Number},
    cholesterol: {type: Number},
    saturatedFat: {type: Number},
    omega3EPA: {type: Number},
    omega3DHA: {type: Number},
    zinc: {type: Number},
    copper: {type: Number},
    manganese: {type: Number},
    selenium: {type: Number},
})


const mealPlanSchema = new Schema({
    name: {type: String, required: true},
    breakfast: [mealSchema],
    lunch: [mealSchema],
    dinner: [mealSchema],
    snacks: [mealSchema],
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
