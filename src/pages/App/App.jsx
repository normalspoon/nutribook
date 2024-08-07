import './App.css';
import {useState} from 'react' 
import DailyMealPage from '../DailyMealPage/DailyMealPage'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'

import { Routes, Route } from "react-router-dom"
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
export default function App() {
  const [user, setUser] = useState(getUser());
  return (
  <main className="App">
    { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<DailyMealPage />} />
          <Route path="/orders/new" element={<DailyMealPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    
    }
  </main>
);
}
