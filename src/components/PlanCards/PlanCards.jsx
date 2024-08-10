import react from 'react'
import {useState, useEffect} from 'react'
import {getPlans} from '../../utilities/plans-api'
import './PlanCards.css'
export default function PlanCards(){
    const [plans, setPlans] = useState([])

    async function fetchPlans() {
        try {
            const data = await getPlans();
            setPlans(data);
        } catch (error) {
            console.error('error fetching meal plans for collection', error)
        }
    }

    useEffect(() => {
        fetchPlans();
    }, [])

    return(
        <>
        <div className = 'cardContainer'>
            {plans.map(plan => (
                <div className = 'cardOutline'>{plan.name}</div>
            ))}
        </div>
        
        </>
    )
}

