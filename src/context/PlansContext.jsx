import React from 'react';
import { createContext, useState, useEffect} from 'react';
import { getPlans, createPlan, updatePlan, deletePlan } from '../utilities/plans-api';


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

        async function addPlan(newPlan) {
            try {
                const response = await createPlan(newPlan);
                setPlans(prevPlans => [...prevPlans, response]);
                return response;
            } catch (error) {
                console.error('Error creating new plan', error);
                throw error;
            }
        }

        async function editPlan(updatedPlan) {
            try {
                const response = await updatePlan(updatedPlan);
                console.log('DEBUGGING', response)
                setPlans(prevPlans => prevPlans.map(plan => plan._id === updatedPlan._id ? response : plan));
                return response;
            } catch (error) {
                console.error('Error updating meal plan', error);
                throw error;
            }
        }
    
        useEffect(() => {
            fetchPlans();
        }, [])


    return (
        <PlansContext.Provider value = {{plans, setPlans, addPlan, editPlan}}>
            {children}
        </PlansContext.Provider>
    )
}