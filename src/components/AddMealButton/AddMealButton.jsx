import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './AddMealButton.css';

export default function AddMealButton( {mealType, onMealAdd}) {
    const [showSearchBar, setShowSearchBar] = useState(false)
    function openSearchBar() {
        setShowSearchBar(true);
    }
    function handleMealSelect(meal) {
        onMealAdd(mealType, meal);
        setShowSearchBar(false);
    }
    return (
    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={openSearchBar}>Add meal</button>
        {showSearchBar? <div> 
        <table className='input-table'>
            <tr>
                <td className='search-bar'>
                    <SearchBar mealType={mealType} onMealSelect={handleMealSelect}/> 
                </td>
                <td className='amount-input'>
                    <input type="text" placeholder="Amount in grams" />
                </td>
            </tr>
        </table>
        </div>: null}
    </div>)


}