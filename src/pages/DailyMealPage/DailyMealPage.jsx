import AddMealButton from "../../components/AddMealButton/AddMealButton";
import { useState } from "react";
import { createPlan } from "../../utilities/plans-api";
    
export default function DailyMealPage() {
    const [mealPlan, setMealPlan] = useState({
        name: '',
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
    });


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
        <h1>Daily Meal Page</h1>
        <div>
            <h2>Name:</h2>
            <input type="text" 
            placeholder="Enter the name of this meal plan" 
            value={mealPlan.name}
            onChange={handleNameChange}/>
        </div>
        <div className='dailyMeals'>
                <h2>Breakfast</h2>
                {mealPlan.breakfast.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                <AddMealButton mealType="breakfast" onMealAdd={handleMealAdd}/>
                
                <h2>Lunch</h2>
                {mealPlan.lunch.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                <AddMealButton mealType="lunch" onMealAdd={handleMealAdd}/>
                
                <h2>Dinner</h2>
                {mealPlan.dinner.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                <AddMealButton mealType="dinner" onMealAdd={handleMealAdd}/>
                
                <h2>Snack</h2>
                {mealPlan.snack.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                <AddMealButton mealType="snack" onMealAdd={handleMealAdd}/>
            </div>
            <div className='nutritionScore'>
                <button onClick={handleSaveMealPlan}>Save Meal Plan</button>
                <h2>Nutrition Score</h2>
            </div>
        </div>
    );
}