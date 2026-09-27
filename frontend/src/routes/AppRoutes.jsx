import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChooseRegister from "../pages/auth/ChooseRegister";
import FoodPartnerLogin from "../pages/auth/foodPartnerLogin";
import FoodPartnerRegister from "../pages/auth/foodPartnerRegister";
import UserLogin from "../pages/auth/userLogin";
import UserRegister from "../pages/auth/userRegister";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChooseRegister />} />
                <Route path="/register" element={<ChooseRegister />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;