import {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function AddMealButton() {
    const [showSearchBar, setShowSearchBar] = useState(false)
    function openSearchBar() {
        setShowSearchBar(true);
        }
    return (<div>
        {showSearchBar ? <SearchBar/> : null}
        <button onClick={openSearchBar}>Add meal</button>
    </div>)


}