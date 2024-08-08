import { useState } from "react"
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function SearchBar({ mealType, onMealSelect }) {
  const [searchInput, setSearchInput] = useState('');
  const [autocomplete, setAutocomplete] = useState([]);

  const fetchFoodAutocomplete = async (query) => {
    const apiKey = 'wgQutoUF16Z9JEHWDmdCkY4CJol4FwrwzdJUjIe4';
    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`)
      const data = await response.json();
      console.log("this is the data",data);
      setAutocomplete(data.foods.map(foodSuggestions => ({ 
        id: foodSuggestions.fdcId, 
        name: foodSuggestions.description,
        energy: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Energy')?.value,
      })));
    } catch (error) {
      console.error('Error fetching food suggestions', error);
      setAutocomplete([]);
    }
  };

  const handleOnSearch = (query) => {

  }
  
  const handleOnSelect = async (item) => {
 
  };

  const handleOnChange = (query) => {
  
  };

  return <div>
    <ReactSearchAutocomplete
      items={autocomplete}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      onChange={handleOnChange}
      autoFocus
      placeholder='Search for a food/meal'
      />
    </div>
}