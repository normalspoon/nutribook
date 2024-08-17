import { Link } from "react-router-dom";
import { checkToken } from "../../utilities/users-service"
import PlanCards from "../../components/PlanCards/PlanCards";


export default function MealPlanCollection({}) {
    async function handleCheckToken() {
       const expDate = await checkToken()
       console.log(expDate)
    }
    return (
        <>
        <h1>Meal Plan Collection</h1>
        <Link to='/AddMeal'>
        <button>Add a day's Meal Plan</button>
        </Link>
        {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        <PlanCards/>
        </>
    )
}