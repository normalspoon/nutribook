import { useState } from "react"
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function SearchBar({ onMealSelect, stackOrder }) {
  const [searchInput, setSearchInput] = useState('');
  const [autocomplete, setAutocomplete] = useState([]);

  const fetchFoodAutocomplete = async (query) => {
    const apiKey = process.env.REACT_APP_FOOD_API_KEY;
    console.log("this is the api key", apiKey);
    try {
      const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`)
      const data = await response.json();
      console.log("this is the data",data);
      setAutocomplete(data.foods.map(foodSuggestions => ({ 
        id: foodSuggestions.fdcId, 
        name: foodSuggestions.description,
        energy: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Energy')?.value,
        protein: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Protein')?.value,
        carbs: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Carbohydrate, by difference')?.value,
        fat: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Total lipid (fat)')?.value,
        sugars: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Sugars, total including NLEA')?.value,
        fiber: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Fiber, total dietary')?.value,
        iron: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Iron, Fe')?.value,
        sodium: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Sodium, Na')?.value,
        magnesium: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Magnesium, Mg')?.value,
        niacin: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Niacin')?.value,
        vitaminA: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin A, RAE')?.value,
        vitaminD: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin D (D2 + D3)')?.value,
        vitaminC: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin C, total ascorbic acid')?.value,
        vitaminK: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin K (phylloquinone)')?.value,
        vitaminB12: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin B-12')?.value,
        vitaminE: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Vitamin E (alpha-tocopherol)')?.value,
        lycopene: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Lycopene')?.value,
        luteinZeaxanthin: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Lutein + zeaxanthin')?.value,
        cholesterol: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Cholesterol')?.value,
        saturatedFat: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Fatty acids, total saturated')?.value,
        omega3EPA: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientNumber === '629')?.value,
        omega3DHA: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientNumber === '621')?.value,
        zinc: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Zinc, Zn')?.value,
        copper: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Copper, Cu')?.value,
        selenium: foodSuggestions.foodNutrients.find(nutrient => nutrient.nutrientName === 'Selenium, Se')?.value,
      })));
    } catch (error) {
      console.error('Error fetching food suggestions', error);
      setAutocomplete([]);
    }
  };

  const handleOnSearch = (query) => {
    setSearchInput(query);
    if (query.length>=3){
      fetchFoodAutocomplete(query);
    } else {
      setAutocomplete([]);
    }
  }
  
  const handleOnSelect = async (item) => {
    onMealSelect(item);
  };

  const handleOnChange = (query) => {
    setSearchInput(query);
  };

  return <div>
    <ReactSearchAutocomplete
      styling={{ zIndex: stackOrder }}
      items={autocomplete}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      onChange={handleOnChange}
      autoFocus
      placeholder='Search for a food/meal'
      />
    </div>
}