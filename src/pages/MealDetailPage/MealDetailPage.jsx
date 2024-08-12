import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";

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

  return (
    <>
      <h1>Meal Plan Details</h1>
      <div>
        <h1>{selectedPlan.name}</h1>
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
              <th>Energy</th>
              <td>{selectedPlan.breakfast.energy}</td>
            </tr>
            <tr>
              <th>Protein</th>
              <td>testing</td>
            </tr>
            <tr>
              <th>Carbs</th>
              <td>testing</td>
              <td>testing</td>
            </tr>
            <tr>
              <th>Fat</th>
              <td>testing</td>
            </tr>
            <tr>
              <th>Sugars</th>
              <td>testing</td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
