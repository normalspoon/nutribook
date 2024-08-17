import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";
import { Link } from "react-router-dom";
import "./MealDetailPage.css";

export default function MealDetailPage() {
  const { id } = useParams();
  const { plans } = useContext(PlansContext);
  const [selectedPlan, setSelectedPlan] = useState(null);
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

  const fetchPlanDetails = async () => {
    const planDetails = plans.find((plan) => plan._id === id);
    console.log("planDetails", planDetails);
    setSelectedPlan(planDetails);
    calculateTotalNutritionScore(planDetails);
  };

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
      selenium: 0,};

    meals.forEach(function (meal) {
      planDetails[meal].forEach(function (food) {
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
    setTotalNutritionScore(totals);
  }

  useEffect(() => {
    fetchPlanDetails();
  }, [id, plans]);

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Meal Plan Details</h1>
      <div className="mealHeader">
        <h1>{selectedPlan.name}</h1>
        <Link to={`/edit/${id}`}>
          <button>
            <span className="material-symbols-outlined">edit</span>
          </button>
        </Link>
      </div>
      <div className="bigContainer">
        <div className="mealContainer">
          <h2>Breakfast</h2>
          {selectedPlan.breakfast.map((food, index) => (
            <div key={index}>
              <p style={{fontWeight: "bold"}}>{food.name}</p>
              <div>
                Energy: {((food.energy / 100) * food.amount).toFixed(2)} kcal | Protein: {((food.protein / 100) * food.amount).toFixed(2)} g | Carbs: {((food.carbs / 100) * food.amount).toFixed(2)} g | Fat: {((food.fat / 100) * food.amount).toFixed(2)} g | Sugars: {((food.sugars / 100) * food.amount).toFixed(2)} g
              </div>
            </div>
          ))}
          <h2>Lunch</h2>
          {selectedPlan.lunch.map((food, index) => (
            <div key={index}>
              <p style={{fontWeight: "bold"}}>{food.name}</p>
              <div>
                Energy: {((food.energy / 100) * food.amount).toFixed(2)} kcal | Protein: {((food.protein / 100) * food.amount).toFixed(2)} g | Carbs: {((food.carbs / 100) * food.amount).toFixed(2)} g | Fat: {((food.fat / 100) * food.amount).toFixed(2)} g | Sugars: {((food.sugars / 100) * food.amount).toFixed(2)} g
              </div>
            </div>
          ))}
          <h2>Dinner</h2>
          {selectedPlan.dinner.map((food, index) => (
            <div key={index}>
              <p style={{fontWeight: "bold"}}>{food.name}</p>
              <div>
                Energy: {((food.energy / 100) * food.amount).toFixed(2)} kcal | Protein: {((food.protein / 100) * food.amount).toFixed(2)} g | Carbs: {((food.carbs / 100) * food.amount).toFixed(2)} g | Fat: {((food.fat / 100) * food.amount).toFixed(2)} g | Sugars: {((food.sugars / 100) * food.amount).toFixed(2)} g
              </div>
            </div>
          ))}
          <h2>Snacks</h2>
          {selectedPlan.snack.map((food, index) => (
            <div key={index}>
              <p style={{fontWeight: "bold"}}>{food.name}</p>
              <div>
                Energy: {((food.energy / 100) * food.amount).toFixed(2)} kcal | Protein: {((food.protein / 100) * food.amount).toFixed(2)} g | Carbs: {((food.carbs / 100) * food.amount).toFixed(2)} g | Fat: {((food.fat / 100) * food.amount).toFixed(2)} g | Sugars: {((food.sugars / 100) * food.amount).toFixed(2)} g
              </div>
            </div>
          ))}
        </div>
          <div className="nutritionCardContainer">
            <h2>Total Nutrition Score</h2>
            <table>
              <thead>
                <tr>
                  <th>Energy kcal</th>
                  <td>{parseInt(totalNutritionScore.energy)}/2500</td>
                  <td>
                    {parseInt((totalNutritionScore.energy / 2500) * 100)}%
                  </td>
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
    </>
  );
}
