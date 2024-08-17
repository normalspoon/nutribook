import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './AddMealButton.css';

export default function AddMealButton( {mealType, onMealAdd, stackOrder}) {
    const [meal, setMeal] = useState(null);
    const [amount, setAmount] = useState(0);
  

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleAddMeal() {
        if (meal && amount) {
            onMealAdd(mealType, {...meal, amount})
            setMeal(null);
            setAmount(0);
        }
    }

    return (
    <div style={{ justifyContent: 'center', alignItems: 'center'}}>
   
      <div> 
        <table className='input-table'>
            <tr>
                <td className='search-bar'>
                    <SearchBar stackOrder={stackOrder} mealType={mealType} onMealSelect={setMeal}/> 
                </td>
                <td className='amount-input'>
                    <input 
                    style={{border: '1px solid rgb(223, 225, 229)'}}
                    className='input-bar-amount'
                    type="number" 
                    placeholder="grams" 
                    onChange={handleAmountChange} />
                </td>
                <td>
                    <button className='add-button' onClick={handleAddMeal}>
                    <span class="material-symbols-outlined">add</span>
                    </button>
                </td>
            </tr>
        </table>
        </div>
    </div>)


}