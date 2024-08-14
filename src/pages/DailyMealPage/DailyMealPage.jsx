import AddMealButton from "../../components/AddMealButton/AddMealButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlansContext } from "../../context/PlansContext";

export default function DailyMealPage() {
    const navigate = useNavigate();
    const { addPlan } = useContext(PlansContext);
    const [mealPlan, setMealPlan] = useState({
        name: '',
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
    });


    async function handleSaveMealPlan() {
        try {
            const response = await addPlan(mealPlan);
            console.log('Meal plann saved', response);
            navigate('/MealPlanCollection');
        }   catch (error) {
            console.error('Error saving meal plan', error);
        }
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
        <h1>Daily Meal Page</h1>
        <div>
            <h2>Name:</h2>
            <input type="text" 
            placeholder="Enter the name of this meal plan" 
            value={mealPlan.name}
            onChange={handleNameChange}/>
        </div>
        <div className='dailyMeals' style={{ position:'relative' }}>
                <h2>Breakfast</h2>
            
                <div style={{ zIndex: 4}}>
                <AddMealButton stackOrder={4} mealType="breakfast" onMealAdd={handleMealAdd}/>
                {mealPlan.breakfast.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                </div>
                
                
                <h2>Lunch</h2>
                <div style={{ zIndex: 3}}>
                <AddMealButton stackOrder={3} mealType="lunch" onMealAdd={handleMealAdd}/>
                {mealPlan.lunch.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                 </div>
                
                <h2>Dinner</h2>
                <AddMealButton stackOrder={2} mealType="dinner" onMealAdd={handleMealAdd}/>
                {mealPlan.dinner.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                
                
                <h2>Snack</h2>
                <AddMealButton stackOrder={1} mealType="snack" onMealAdd={handleMealAdd}/>
                {mealPlan.snack.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
            </div>
            <div className='nutritionScore'>
                <button onClick={handleSaveMealPlan}>Save Meal Plan</button>
                <h2>Nutrition Score</h2>
            </div>
        </div>
    );
}