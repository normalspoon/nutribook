import { useState } from "react"


export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [Autocomplete, setAutocomplete] = useState([]);

  const fetchFoodAutocomplete = async (query) => {
    const apiKey = 'wgQutoUF16Z9JEHWDmdCkY4CJol4FwrwzdJUjIe4';
    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`)
      const data = await response.json();
      console.log(data);
      setAutocomplete(data.foods);
    } catch (error) {
      console.error('Error fetching food suggestions', error);
    }
    }


  const handleChange = (evt) => {
    const query = evt.target.value;
    setSearchInput(query);
    if (query.length>3){
      fetchFoodAutocomplete(query);
    } else {
      setAutocomplete([])
    }

  }

  return <div>
    <input
    type='text'
    placeholder='Search for a food/meal'
    onChange={handleChange}
    value={searchInput}
    />
    <ul>
      {Autocomplete.map((foodSuggestions) => (
        <li key={foodSuggestions.fdcId}>{foodSuggestions.description}</li>
      ))}
    </ul>
    </div>
}