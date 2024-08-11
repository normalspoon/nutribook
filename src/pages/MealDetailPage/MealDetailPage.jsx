
export default function MealDetailPage({ planDetails}) {
    return (
        <>
            <h1>Meal Plan Details</h1>
            {planDetails && (
                <div>
                    <h2>{planDetails.name}</h2>
                    <p>{planDetails.description}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </>
    );
}