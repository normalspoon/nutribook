import AddMealButton from "../../components/AddMealButton/AddMealButton";
    
export default function DailyMealPage() {

    return (
        <div>
        <h1>Daily Meal Page</h1>
       <card className='dailyMeals'>
        <h2>Breakfast</h2>
        <AddMealButton/>
    
        <h2>Lunch</h2>
        <AddMealButton/>
        <h2>Dinner</h2>
        <AddMealButton/>
        <h2>Snack</h2>
        <AddMealButton/>
        </card>
        <card className ='nutritionScore'>
        <h2>Nutrition Score</h2>
        </card>
        </div>

    );
}