// import {useState, useEffect} from 'react'
import {useContext} from 'react'
// import {getPlans} from '../../utilities/plans-api'
import { Link } from 'react-router-dom'
import './PlanCards.css'
import { PlansContext } from '../../context/PlansContext'

export default function PlanCards(){
    const {plans} = useContext(PlansContext)
    
    //refactoring to context to be more DRY
    // const [plans, setPlans] = useState([])

    // async function fetchPlans() {
    //     try {
    //         const data = await getPlans();
    //         setPlans(data);
    //     } catch (error) {
    //         console.error('error fetching meal plans for collection', error)
    //     }
    // }

    // useEffect(() => {
    //     fetchPlans();
    // }, [])

    return(
        <>
        <div className = 'cardContainer'>
            {plans.map((plan, index) => (
                <Link to = {`/meal-detail/${plan._id}`} key={plan._id}>
                <div className = 'cardOutline'>
                    {plan.name} 
                </div>
                </Link>
                ))}
            </div>
        </>
    );
}