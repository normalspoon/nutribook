import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function AddMealButton( {mealType, onMealAdd}) {
    const [showSearchBar, setShowSearchBar] = useState(false)
    function openSearchBar() {
        setShowSearchBar(true);
        }
    function handleMealSelect(meal) {
        onMealAdd(mealType, meal);
        setShowSearchBar(false);
    }
    return (<div>
        {showSearchBar ? <SearchBar mealType={mealType} onMealSelect={handleMealSelect}/> : null}
        <button onClick={openSearchBar}>Add meal</button>
    </div>)


}