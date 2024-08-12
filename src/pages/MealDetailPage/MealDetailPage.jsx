import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";
import './MealDetailPage.css';

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
  });

  const fetchPlanDetails = async () => {
    const planDetails = plans.find((plan) => plan._id === id);
    console.log('planDetails', planDetails);
    setSelectedPlan(planDetails);
    calculateTotalNutritionScore(planDetails);
  };

function calculateTotalNutritionScore(planDetails) {
    const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
    const totals = { energy: 0, protein: 0, carbs: 0, fat: 0, sugars: 0 };

    meals.forEach(function(meal) {
        console.log('meal', meal);
        planDetails[meal].forEach(function(food) {
          console.log('planDetails', planDetails, 'food', food);
          totals.energy += food.energy;
          totals.protein += food.protein;
          totals.carbs += food.carbs;
          totals.fat += food.fat;
          totals.sugars += food.sugars;
        });
      });
      console.log('totals', totals);
      setTotalNutritionScore(totals);
  }


  useEffect(() => {
    fetchPlanDetails();
  }, [id, plans]);

  console.log('selectedPlan', selectedPlan);
  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  function handleEdit() {
    console.log('Edit button clicked');
  }

  return (
    <>
      <h1>Meal Plan Details</h1>
      <div className="mealHeader">
        <h1>{selectedPlan.name}</h1> 
        <button className="editButton" onClick={handleEdit}>Edit</button>
      </div>
      <h2>Breakfast</h2>
      {selectedPlan.breakfast.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
            <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
      <h2>Lunch</h2>
      {selectedPlan.lunch.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
      <h2>Dinner</h2>
      {selectedPlan.dinner.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
      <h2>Snacks</h2>
      {selectedPlan.snack.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
      <div className="nutritionCardContainer">
        <h2>Total Nutrition Score</h2>
        <table>
          <thead>
            <tr>
              <th>Energy kcal</th>
              <td>{parseInt(totalNutritionScore.energy)}/2500</td>
              <td>{parseInt(totalNutritionScore.energy/2500*100)}%</td>
            </tr>
            <tr>
              <th>Protein (g)</th>
              <td>{parseInt(totalNutritionScore.protein)}/50</td>
              <td>{parseInt(totalNutritionScore.protein/50*100)}%</td>
            </tr>
            <tr>
              <th>Carbs</th> 
              <td>{parseInt(totalNutritionScore.carbs)}/300</td>
              <td>{parseInt(totalNutritionScore.carbs/300*100)}%</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>{parseInt(totalNutritionScore.fat)}/300</td>
              <td>{parseInt(totalNutritionScore.fat/300*100)}%</td>
            </tr>
            <tr>
              <th>Sugars</th>
              <td>{parseInt(totalNutritionScore.sugars)}/50</td>
              <td>{parseInt(totalNutritionScore.sugars/50*100)}%</td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
