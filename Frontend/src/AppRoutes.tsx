import { Navigate, Route, Routes } from "react-router-dom"; 
import Layout from "./layouts/layouts"; 
import Homepage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><Homepage /></Layout>}/>
            
            <Route path="/auth-callback" element={<AuthCallbackPage />} />

            <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<Layout ><userProfilePage /></Layout>}/>

            <Route element={<ProtectedRoute />}>
            <Route path="/manage-restaurant" element={<Layout ><ManageRestaurantPage /></Layout>}/>
            </Route>

            <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
    );
};

export default AppRoutes; 