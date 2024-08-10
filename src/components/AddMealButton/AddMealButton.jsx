import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './AddMealButton.css';

export default function AddMealButton( {mealType, onMealAdd, setAmount, amount, meal}) {
  

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleAddMeal() {
        onMealAdd(mealType, meal, amount);
    }

    return (
    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
   
      <div> 
        <table className='input-table'>
            <tr>
                <td className='search-bar'>
                    <SearchBar mealType={mealType}/> 
                </td>
                <td className='amount-input'>
                    <input type="number" placeholder="Amount in grams" onChange={handleAmountChange} />
                </td>
                <td className='add-button'>
                    <button onClick={handleAddMeal} onAmountChange={handleAmountChange}>Add</button>
                </td>
            </tr>
        </table>
        </div>
    </div>)


}