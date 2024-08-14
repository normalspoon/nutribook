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
                    type="number" 
                    alue ={amount}
                    placeholder="Amount in grams" 
                    onChange={handleAmountChange} />
                </td>
                <td className='add-button'>
                    <button onClick={handleAddMeal}>Add</button>
                    
                </td>
            </tr>
        </table>
        </div>
    </div>)


}