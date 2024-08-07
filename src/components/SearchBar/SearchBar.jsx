import { useState } from "react"


export default function SearchBar() {

  const [searchInput, setSearchInput] = useState('');
  const [Autocomplete, setAutocomplete] = useState([]);

  const handleChange = (evt) => {


  }

  return <div>
    <input
    type='text'
    placeholder='Search for a food/meal'
    onChange={handleChange}
    value={searchInput}
    />
    </div>
}