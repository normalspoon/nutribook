import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { PlansContext } from '../../context/PlansContext';

export default function MealDetailPage() {
    const {id} = useParams()
    const { plans } = useContext(PlansContext);
    const planDetails = plans.find(plan => plan._id === id);

    return (
        <>
            <h1>Meal Plan Details</h1>
            {planDetails ? (
                <div>
                    <h2>{planDetails.name}</h2>
                    <p>{planDetails.description}</p>
                </div>
            ) : (
                <p>No plan details available.</p>
            )}
        </>
    );
}