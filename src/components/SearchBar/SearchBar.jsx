import { useState } from "react"
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [autocomplete, setAutocomplete] = useState([]);

  const fetchFoodAutocomplete = async (query) => {
    const apiKey = 'wgQutoUF16Z9JEHWDmdCkY4CJol4FwrwzdJUjIe4';
    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`)
      const data = await response.json();
      console.log("this is the data",data);
      setAutocomplete(data.foods.map(foodSuggestions => ({ id: foodSuggestions.fdcId, name: foodSuggestions.description})));
    } catch (error) {
      console.error('Error fetching food suggestions', error);
    }
    }

  const handleOnSearch = (query) => {
    setSearchInput(query);
    if (query.length>3){
      fetchFoodAutocomplete(query);
    } else {
      setAutocomplete([])
    }
  }

  const handleOnSelect = (item) => {
    console.log(item);
    
    setSearchInput(item.name);
  }

  const handleOnChange = (query) => {
    setSearchInput(query);
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