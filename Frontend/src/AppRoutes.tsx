import { Navigate, Route, Routes } from "react-router-dom"; 
import { Layout } from "./layouts/layouts"; 
import { Homepage } from "./pages/HomePage.tsx";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { getCurrentUser, createCurrentUser, updateCurrentUser } from "./backend/controllers/MuUserController.ts"; 
import UserProfilePage from "./pages/UserProfilePage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <Layout showHero>
                <Homepage />
                </Layout>}/>
            
            <Route path="/auth-callback" element={
                <AuthCallbackPage />
                } />

            <Route path="/search/:city" element={
                <Layout showHero={false}>
                    <SearchPage/>
                    </Layout>} />
        {/* </Routes> */}

            <Routes element={<ProtectedRoute />}>

            <Route path="/user-profile" element={
                <Layout >
                    <UserProfilePage />
                    </Layout>}/>

            <Route element={<ProtectedRoute />}>

            <Route path="/manage-restaurant" element={
                <Layout >
                    <restaurant />
                    </Layout>}/>
            </Route>

            <Route path="*" element={<Navigate to="/", />} /> 
    
    </Routes>
    );

export default AppRoutes; 