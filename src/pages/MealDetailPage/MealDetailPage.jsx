import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";

export default function MealDetailPage() {
  const { id } = useParams();
  const { plans } = useContext(PlansContext);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const fetchPlanDetails = async () => {
    const planDetails = plans.find((plan) => plan._id === id);
    setSelectedPlan(planDetails);
  };

  useEffect(() => {
    fetchPlanDetails();
  }, [id, plans]);

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
      {selectedPlan.breakfast.map((meal, index) => (
        <div key={index}>
          <p>{meal.name}</p>
          <ul>
            <li>Energy: {meal.energy} Protein: {meal.protein} Carbs: {meal.carbs} Fat: {meal.fat} Sugars: {meal.sugars}</li>
          </ul>
        </div>
      ))}
      <h2>Lunch</h2>
      {selectedPlan.lunch.map((meal, index) => (
        <div key={index}>
          <p>{meal.name}</p>
          <ul>
            <li>Energy: {meal.energy}</li>
          </ul>
        </div>
      ))}
      <h2>Dinner</h2>
      {selectedPlan.dinner.map((meal, index) => (
        <div key={index}>
          <p>{meal.name}</p>
          <ul>
            <li>Energy: {meal.energy}</li>
          </ul>
        </div>
      ))}
      <h2>Snacks</h2>
      {selectedPlan.snack.map((meal, index) => (
        <div key={index}>
          <p>{meal.name}</p>
          <ul>
            <li>Energy: {meal.energy}</li>
          </ul>
        </div>
      ))}
      <div className="nutritionCardContainer">
        <h2>Total Nutrition Score</h2>
        <table>
          <thead>
            <tr>
              <th>Energy</th>
              <td>{selectedPlan.energy}</td>
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
