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
                <AddMealButton mealType="breakfast" onMealAdd={handleMealAdd}/>
                {mealPlan.breakfast.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                
                
                <h2>Lunch</h2>
                <AddMealButton mealType="lunch" onMealAdd={handleMealAdd}/>
                {mealPlan.lunch.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                
                
                <h2>Dinner</h2>
                <AddMealButton mealType="dinner" onMealAdd={handleMealAdd}/>
                {mealPlan.dinner.map((meal, index) => (
                    <div key={index}>{meal.name} - {meal.amount} grams - {((meal.energy /100) * meal.amount)} kcal</div>
                ))}
                
                
                <h2>Snack</h2>
                <AddMealButton mealType="snack" onMealAdd={handleMealAdd}/>
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