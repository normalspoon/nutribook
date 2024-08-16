import AddMealButton from "../../components/AddMealButton/AddMealButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";

export default function DailyMealPage() {
  const navigate = useNavigate();
  const { addPlan } = useContext(PlansContext);
  const [mealPlan, setMealPlan] = useState({
    name: "",
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  });

  const [totalNutritionScore, setTotalNutritionScore] = useState({
    energy: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    sugars: 0,
  });

  function calculateTotalNutritionScore(planDetails) {
    const meals = ["breakfast", "lunch", "dinner", "snack"];
    const totals = { energy: 0, protein: 0, carbs: 0, fat: 0, sugars: 0 };

    meals.forEach(function (meal) {
      console.log("meal", meal);
      planDetails[meal].forEach(function (food) {
        console.log("planDetails", planDetails, "food", food);
        totals.energy += food.energy;
        totals.protein += food.protein;
        totals.carbs += food.carbs;
        totals.fat += food.fat;
        totals.sugars += food.sugars;
      });
    });
    console.log("totals", totals);
    setTotalNutritionScore(totals);
  }

  async function handleSaveMealPlan() {
    try {
      const response = await addPlan(mealPlan);
      console.log("Meal plann saved", response);
      navigate("/MealPlanCollection");
    } catch (error) {
      console.error("Error saving meal plan", error);
    }
  }

  function handleMealAdd(mealType, meal) {
    setMealPlan((prevState) => {
      const updatedMealPlan = {
        ...prevState,
        [mealType]: [...prevState[mealType], meal],
      };
      calculateTotalNutritionScore(updatedMealPlan);
      return updatedMealPlan;
    });
  }

  function handleNameChange(event) {
    setMealPlan((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  }

  function handleFoodRemove(mealType, index) {
    setMealPlan((prevState) => {
        const updatedMealPlan = {
            ...prevState,
            [mealType]: [...prevState[mealType]].filter((meal, i) => i !== index) 
        }
        calculateTotalNutritionScore(updatedMealPlan);
        return updatedMealPlan;
    })
  }

  return (
    <div>
      <h1>Daily Meal Page</h1>
      <div>
        <h2>Name:</h2>
        <input
          type="text"
          placeholder="Enter the name of this meal plan"
          value={mealPlan.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="dailyMeals" style={{ position: "relative" }}>
        <h2>Breakfast</h2>

        <div style={{ zIndex: 4 }}>
          <AddMealButton
            stackOrder={4}
            mealType="breakfast"
            onMealAdd={handleMealAdd}
          />
          {mealPlan.breakfast.map((meal, index) => (
            <div key={index}>
              {meal.name} - {meal.amount} grams -{" "}
              Energy: {(meal.energy / 100) * meal.amount} kcal
              Protein: {meal.protein / 100 * meal.amount} g
              Carbs: {meal.carbs / 100 * meal.amount} g
              Fat: {meal.fat / 100 * meal.amount} g
              Sugars: {meal.sugars / 100 * meal.amount} g
              <button onClick = {() => handleFoodRemove('breakfast', index)}>X</button>
            </div>
          ))}
        </div>

        <h2>Lunch</h2>
        <div style={{ zIndex: 3 }}>
          <AddMealButton
            stackOrder={3}
            mealType="lunch"
            onMealAdd={handleMealAdd}
          />
          {mealPlan.lunch.map((meal, index) => (
            <div key={index}>
              {meal.name} - {meal.amount} grams -{" "}
              Energy: {(meal.energy / 100) * meal.amount} kcal
              Protein: {meal.protein / 100 * meal.amount} g
              Carbs: {meal.carbs / 100 * meal.amount} g
              Fat: {meal.fat / 100 * meal.amount} g
              Sugars: {meal.sugars / 100 * meal.amount} g
              <button onClick = {() => handleFoodRemove('lunch', index)}>X</button>
            </div>
          ))} 
        </div>

        <h2>Dinner</h2>
        <AddMealButton
          stackOrder={2}
          mealType="dinner"
          onMealAdd={handleMealAdd}
        />
        {mealPlan.dinner.map((meal, index) => (
          <div key={index}>
            {meal.name} - {meal.amount} grams -{" "}
            Energy: {(meal.energy / 100) * meal.amount} kcal
            Protein: {meal.protein / 100 * meal.amount} g
            Carbs: {meal.carbs / 100 * meal.amount} g
            Fat: {meal.fat / 100 * meal.amount} g
            Sugars: {meal.sugars / 100 * meal.amount} g
            <button onClick = {() => handleFoodRemove('dinner', index)}>X</button>
            </div>
        ))}

        <h2>Snack</h2>
        <AddMealButton
          stackOrder={1}
          mealType="snack"
          onMealAdd={handleMealAdd}
        />
        {mealPlan.snack.map((meal, index) => (
          <div key={index}>
          {meal.name} - {meal.amount} grams -{" "}
          Energy: {(meal.energy / 100) * meal.amount} kcal
          Protein: {meal.protein / 100 * meal.amount} g
          Carbs: {meal.carbs / 100 * meal.amount} g
          Fat: {meal.fat / 100 * meal.amount} g
          Sugars: {meal.sugars / 100 * meal.amount} g
          <button onClick = {() => handleFoodRemove('snack', index)}>X</button>
          </div>
        ))}
      </div>
      <div className="nutritionScore">
        <button onClick={handleSaveMealPlan}>Save Meal Plan</button>
      </div>

      <div className="nutritionCardContainer">
        <h2>Total Nutrition Score</h2>
        <table>
          <thead>
            <tr>
              <th>Energy kcal</th>
              <td>{parseInt(totalNutritionScore.energy)}/2500</td>
              <td>{parseInt((totalNutritionScore.energy / 2500) * 100)}%</td>
            </tr>
            <tr>
              <th>Protein (g)</th>
              <td>{parseInt(totalNutritionScore.protein)}/50</td>
              <td>{parseInt((totalNutritionScore.protein / 50) * 100)}%</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>{parseInt(totalNutritionScore.carbs)}/300</td>
              <td>{parseInt((totalNutritionScore.carbs / 300) * 100)}%</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>{parseInt(totalNutritionScore.fat)}/300</td>
              <td>{parseInt((totalNutritionScore.fat / 300) * 100)}%</td>
            </tr>
            <tr>
              <th>Sugars</th>
              <td>{parseInt(totalNutritionScore.sugars)}/50</td>
              <td>{parseInt((totalNutritionScore.sugars / 50) * 100)}%</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
