import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  } 

  return (
    <nav className='nav'>
      <Link to="/MealPlanCollection" className='meal-plan-collection'>Meal Plan Collection</Link>
      &nbsp; | &nbsp;
      <Link to="/AddMeal" className='create-new-meal-plan'>Create New Meal Plan</Link>
      {/* &nbsp;&nbsp;<span>Welcome, {user.name}</span> */}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className='logout'>Log Out</Link>
    </nav>
  );
}


