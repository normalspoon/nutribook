import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";
import { Link } from "react-router-dom";
import './EditMealPage.css';
import  SearchBar  from "../../components/SearchBar/SearchBar"
import AddMealButton from "../../components/AddMealButton/AddMealButton";
import { createPlan } from "../../utilities/plans-api";

    
export default function EditMealPage() {
    const [mealPlan, setMealPlan] = useState({
        name: '',
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
    });

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







    function handleSaveMealPlan(){
        createPlan(mealPlan).then(response => {
            console.log('Meal plann saved', response);
        }).catch(error => {
            console.error('Error saving meal plan', error);
        });
    }

    function handleMealAdd(mealType, meal){
        setMealPlan(prevState => ({
            ...prevState,
            [mealType]: [...prevState[mealType], meal]
        }))
    }

    function handleNameChange(event) {
        setMealPlan(prevState => ({
            ...prevState,
            name: event.target.value,
        }));
    }


    return (
        <div>
        <h1>Edit Meal Page</h1>
        <div>
            <h2>Name:</h2>
            <input type="text" 
            placeholder={`${selectedPlan.name}`}
            value={mealPlan.name}
            onChange={handleNameChange}/>
        </div>
        <div className='dailyMeals'>
                <h2>Breakfast</h2>
                <AddMealButton mealType="breakfast" onMealAdd={handleMealAdd}/>
                {mealPlan.breakfast.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                {selectedPlan.breakfast.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
            <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
                
                
                <h2>Lunch</h2>
                <AddMealButton mealType="lunch" onMealAdd={handleMealAdd}/>
                {mealPlan.lunch.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                   {selectedPlan.lunch.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
                
                
                <h2>Dinner</h2>
                <AddMealButton mealType="dinner" onMealAdd={handleMealAdd}/>
                {mealPlan.dinner.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                   {selectedPlan.dinner.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
                
                
                <h2>Snack</h2>
                <AddMealButton mealType="snack" onMealAdd={handleMealAdd}/>
                {mealPlan.snack.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                {selectedPlan.snack.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <ul>
          <li>Energy: {food.energy} Protein: {food.protein} Carbs: {food.carbs} Fat: {food.fat} Sugars: {food.sugars}</li>
          </ul>
        </div>
      ))}
            </div>
            <div className='nutritionScore'>
            <Link to= "/">
                <button onClick={handleSaveMealPlan}>Save Meal Plan</button>
            </Link>
    
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
            </div>
        </div>
    );
}






