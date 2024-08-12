import React from 'react';
import { createContext, useState, useEffect} from 'react';
import { getPlans } from '../utilities/plans-api';

export const PlansContext = createContext();

export function PlansFetchProvider({ children }) {

        const [plans, setPlans] = useState([]);
  

        async function fetchPlans() {
            try {
                const planData = await getPlans();
                console.log('planData:',planData)
                const mealData = planData.map(plan => ({
                    ...plan, 
                    meals: ['breakfast', 'lunch', 'dinner', 'snack'].flatMap(mealType => 
                        plan[mealType].map(meal => ({
                            ...meal,
                        }))
                    )
                }));
                setPlans(mealData);

            } catch (error) {
                console.error('error fetching meal plans for collection', error)
            }
        }
    
        useEffect(() => {
            fetchPlans();
        }, [])




    return (
        <PlansContext.Provider value = {{plans, setPlans}}>
            {children}
        </PlansContext.Provider>
    )
}