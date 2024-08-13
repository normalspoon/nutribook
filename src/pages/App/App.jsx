import './App.css';
import {useState} from 'react' 
import DailyMealPage from '../DailyMealPage/DailyMealPage'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom"
import { getUser } from '../../utilities/users-service';
import MealPlanCollection from '../MealPlanCollection/MealPlanCollection';
import MealDetailPage from '../MealDetailPage/MealDetailPage'
import EditMealPage from '../EditMealPage/EditMealPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
  <main className="App">
    { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<MealPlanCollection />} />
          <Route path="/AddMeal" element={<DailyMealPage />} />
          <Route path="/MealPlanCollection" element={<MealPlanCollection />} />
          <Route path="/meal-detail/:id" element={<MealDetailPage/>}/>
          <Route path="/edit/:id" element={<EditMealPage/>}/>
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    
    }
  </main>
);
}
