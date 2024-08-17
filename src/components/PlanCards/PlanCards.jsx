// import {useState, useEffect} from 'react'
import {useContext} from 'react'
// import {getPlans} from '../../utilities/plans-api'
import { Link } from 'react-router-dom'
import './PlanCards.css'
import { PlansContext } from '../../context/PlansContext'

export default function PlanCards(){
    const {plans} = useContext(PlansContext)
    

    return(
        <>
        <div className = 'cardContainer'>
            {plans.map((plan) => (
                <Link className='card-link' to = {`/meal-detail/${plan._id}`} key={plan._id}>
                <div className = 'cardOutline'>
                    {plan.name} 
                </div>
                </Link>
                ))}
            </div>
        </>
    );
}