import AddMealButton from "../../components/AddMealButton/AddMealButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";
import "./DailyMealPage.css";

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
    fiber: 0,
    iron: 0,
    sodium: 0,
    magnesium: 0,
    niacin: 0,
    vitaminA: 0,
    vitaminC: 0,
    vitaminD: 0,
    vitaminK: 0,
    vitaminB12: 0,
    vitaminE: 0,
    lycopene: 0,
    luteinZeaxanthin: 0,
    cholesterol: 0,
    saturatedFat: 0,
    omega3EPA: 0,
    omega3DHA: 0,
    zinc: 0,
    copper: 0,
    manganese: 0,
    selenium: 0,
  });

  function calculateTotalNutritionScore(planDetails) {
    const meals = ["breakfast", "lunch", "dinner", "snack"];
    const totals = { 
      energy: 0, 
      protein: 0, 
      carbs: 0, 
      fat: 0, 
      sugars: 0, 
      fiber: 0,
      iron: 0,
      sodium: 0,
      magnesium: 0,
      niacin: 0,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      vitaminK: 0,
      vitaminB12: 0,
      vitaminE: 0,
      lycopene: 0,
      luteinZeaxanthin: 0,
      cholesterol: 0,
      saturatedFat: 0,
      omega3EPA: 0,
      omega3DHA: 0,
      zinc: 0,
      copper: 0,
      manganese: 0,
      selenium: 0,
    };

    meals.forEach(function (meal) {
      console.log("meal", meal);
      planDetails[meal].forEach(function (food) {
        console.log("planDetails", planDetails, "food", food);
        totals.energy += (food.energy / 100) * food.amount;
        totals.protein += (food.protein / 100) * food.amount;
        totals.carbs += (food.carbs / 100) * food.amount;
        totals.fat += (food.fat / 100) * food.amount;
        totals.sugars += (food.sugars / 100) * food.amount;
        totals.fiber += (food.fiber / 100) * food.amount;
        totals.iron += (food.iron / 100) * food.amount;
        totals.sodium += (food.sodium / 100) * food.amount;
        totals.magnesium += (food.magnesium / 100) * food.amount;
        totals.niacin += (food.niacin / 100) * food.amount;
        totals.vitaminA += (food.vitaminA / 100) * food.amount;
        totals.vitaminC += (food.vitaminC / 100) * food.amount;
        totals.vitaminD += (food.vitaminD / 100) * food.amount;
        totals.vitaminK += (food.vitaminK / 100) * food.amount;
        totals.vitaminB12 += (food.vitaminB12 / 100) * food.amount;
        totals.vitaminE += (food.vitaminE / 100) * food.amount;
        totals.lycopene += (food.lycopene / 100) * food.amount;
        totals.luteinZeaxanthin += (food.luteinZeaxanthin / 100) * food.amount;
        totals.cholesterol += (food.cholesterol / 100) * food.amount;
        totals.saturatedFat += (food.saturatedFat / 100) * food.amount;
        totals.omega3EPA += (food.omega3EPA / 100) * food.amount;
        totals.omega3DHA += (food.omega3DHA / 100) * food.amount;
        totals.zinc += (food.zinc / 100) * food.amount;
        totals.copper += (food.copper / 100) * food.amount;
        totals.manganese += (food.manganese / 100) * food.amount;
        totals.selenium += (food.selenium / 100) * food.amount;
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
        [mealType]: [...prevState[mealType]].filter((meal, i) => i !== index),
      };
      calculateTotalNutritionScore(updatedMealPlan);
      return updatedMealPlan;
    });
  }

  return (
    <div>
      <h1>Create a new meal plan</h1>
      <div>
        <h2>Name:</h2>
        <input
          className="input"
          type="text"
          placeholder="Enter the name of this meal plan"
          value={mealPlan.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="bigContainer">
        <div className="mealContainer" style={{ position: "relative" }}>
          <h2>Breakfast</h2>

          <div style={{ zIndex: 4 }}>
            <AddMealButton
              stackOrder={4}
              mealType="breakfast"
              onMealAdd={handleMealAdd}
            />
            {mealPlan.breakfast.map((meal, index) => (
              <div key={index}>
                {meal.name} - {meal.amount} grams <br/>
                Energy:{" "}{((meal.energy / 100) * meal.amount).toFixed(2)} kcal
                Protein:{" "}{((meal.protein / 100) * meal.amount).toFixed(2)} g 
                Carbs:{" "}{((meal.carbs / 100) * meal.amount).toFixed(2)} g 
                Fat:{" "}{((meal.fat / 100) * meal.amount).toFixed(2)} g 
                Sugars:{" "}{((meal.sugars / 100) * meal.amount).toFixed(2)} g
                <button className="removeButton" onClick={() => handleFoodRemove("breakfast", index)}>
                  X
                </button>
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
                 {meal.name} - {meal.amount} grams <br/>
                Energy:{" "}{((meal.energy / 100) * meal.amount).toFixed(2)} kcal
                Protein:{" "}{((meal.protein / 100) * meal.amount).toFixed(2)} g 
                Carbs:{" "}{((meal.carbs / 100) * meal.amount).toFixed(2)} g 
                Fat:{" "}{((meal.fat / 100) * meal.amount).toFixed(2)} g 
                Sugars:{" "}{((meal.sugars / 100) * meal.amount).toFixed(2)} g
                <button className="removeButton" onClick={() => handleFoodRemove("lunch", index)}>
                  X
                </button>
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
               {meal.name} - {meal.amount} grams <br/>
                Energy:{" "}{((meal.energy / 100) * meal.amount).toFixed(2)} kcal
                Protein:{" "}{((meal.protein / 100) * meal.amount).toFixed(2)} g 
                Carbs:{" "}{((meal.carbs / 100) * meal.amount).toFixed(2)} g 
                Fat:{" "}{((meal.fat / 100) * meal.amount).toFixed(2)} g 
                Sugars:{" "}{((meal.sugars / 100) * meal.amount).toFixed(2)} g
                <button className="removeButton" onClick={() => handleFoodRemove("dinner", index)}>
                  X
                </button>
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
               {meal.name} - {meal.amount} grams <br/>
                Energy:{" "}{((meal.energy / 100) * meal.amount).toFixed(2)} kcal
                Protein:{" "}{((meal.protein / 100) * meal.amount).toFixed(2)} g 
                Carbs:{" "}{((meal.carbs / 100) * meal.amount).toFixed(2)} g 
                Fat:{" "}{((meal.fat / 100) * meal.amount).toFixed(2)} g 
                Sugars:{" "}{((meal.sugars / 100) * meal.amount).toFixed(2)} g
                <button className="removeButton" onClick={() => handleFoodRemove("snack", index)}>
                  X
                </button>
            </div>
          ))}
          <button onClick={handleSaveMealPlan}>Save Meal Plan</button>
        </div>

        <div className="nutritionCardContainer">
          <div className="nutrition-header">
            <h2>Total Nutrition Score</h2>
          </div>
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
              <tr>
                <th>Fiber</th>
                <td>{parseInt(totalNutritionScore.fiber)}/30</td>
                <td>{parseInt((totalNutritionScore.fiber / 30) * 100)}%</td>
              </tr>
              <tr>
                <th>Iron</th>
                <td>{parseInt(totalNutritionScore.iron)}/18</td>
                <td>{parseInt((totalNutritionScore.iron / 18) * 100)}%</td>
              </tr>
              <tr>
                <th>Sodium</th>
                <td>{parseInt(totalNutritionScore.sodium)}/2300</td>
                <td>{parseInt((totalNutritionScore.sodium / 2300) * 100)}%</td>
              </tr>
              <tr>
                <th>Magnesium</th>
                <td>{parseInt(totalNutritionScore.magnesium)}/400</td>
                <td>{parseInt((totalNutritionScore.magnesium / 400) * 100)}%</td>
              </tr>
              <tr>
                <th>Niacin</th>
                <td>{parseInt(totalNutritionScore.niacin)}/16</td>
                <td>{parseInt((totalNutritionScore.niacin / 16) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin A</th>
                <td>{parseInt(totalNutritionScore.vitaminA)}/900</td>
                <td>{parseInt((totalNutritionScore.vitaminA / 900) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin C</th>
                <td>{parseInt(totalNutritionScore.vitaminC)}/90</td>
                <td>{parseInt((totalNutritionScore.vitaminC / 90) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin D</th>
                <td>{parseInt(totalNutritionScore.vitaminD)}/20</td>
                <td>{parseInt((totalNutritionScore.vitaminD / 20) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin K</th>
                <td>{parseInt(totalNutritionScore.vitaminK)}/120</td>
                <td>{parseInt((totalNutritionScore.vitaminK / 120) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin B12</th>
                <td>{parseInt(totalNutritionScore.vitaminB12)}/2.4</td>
                <td>{parseInt((totalNutritionScore.vitaminB12 / 2.4) * 100)}%</td>
              </tr>
              <tr>
                <th>Vitamin E</th>
                <td>{parseInt(totalNutritionScore.vitaminE)}/15</td>
                <td>{parseInt((totalNutritionScore.vitaminE / 15) * 100)}%</td>
              </tr>
              <tr>
                <th>Lycopene</th>
                <td>{parseInt(totalNutritionScore.lycopene)}/2000</td>
                <td>{parseInt((totalNutritionScore.lycopene / 2000) * 100)}%</td>
              </tr>
              <tr>
                <th>Lutein + Zeaxanthin</th>
                <td>{parseInt(totalNutritionScore.luteinZeaxanthin)}/1000</td>
                <td>{parseInt((totalNutritionScore.luteinZeaxanthin / 1000) * 100)}%</td>
              </tr>
              <tr>
                <th>Cholesterol</th>
                <td>{parseInt(totalNutritionScore.cholesterol)}/300</td>
                <td>{parseInt((totalNutritionScore.cholesterol / 300) * 100)}%</td>
              </tr>
              <tr>
                <th>Saturated Fat</th>
                <td>{parseInt(totalNutritionScore.saturatedFat)}/20</td>
                <td>{parseInt((totalNutritionScore.saturatedFat / 20) * 100)}%</td>
              </tr>
              <tr>
                <th>Omega 3 EPA</th>
                <td>{parseInt(totalNutritionScore.omega3EPA)}/10</td>
                <td>{parseInt((totalNutritionScore.omega3EPA / 10) * 100)}%</td>
              </tr>
              <tr>
                <th>Omega 3 DHA</th>
                <td>{parseInt(totalNutritionScore.omega3DHA)}/10</td>
                <td>{parseInt((totalNutritionScore.omega3DHA / 10) * 100)}%</td>
              </tr>
              <tr>
                <th>Zinc</th>
                <td>{parseInt(totalNutritionScore.zinc)}/10</td>
                <td>{parseInt((totalNutritionScore.zinc / 10) * 100)}%</td>
              </tr>
              <tr>
                <th>Copper</th>
                <td>{parseInt(totalNutritionScore.copper)}/10</td>
                <td>{parseInt((totalNutritionScore.copper / 10) * 100)}%</td>
              </tr>
              <tr>
                <th>Manganese</th>
                <td>{parseInt(totalNutritionScore.manganese)}/10</td>
                <td>{parseInt((totalNutritionScore.manganese / 10) * 100)}%</td>
              </tr>
              <tr>
                <th>Selenium</th>
                <td>{parseInt(totalNutritionScore.selenium)}/55</td>
                <td>{parseInt((totalNutritionScore.selenium / 55) * 100)}%</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
